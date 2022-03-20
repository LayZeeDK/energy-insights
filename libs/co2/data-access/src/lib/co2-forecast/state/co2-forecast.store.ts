import { Injectable } from '@angular/core';
import { Co2Forecast } from '@energy-insights/co2/domain';
import { DanishDateStore } from '@energy-insights/co2/util-date-times';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Duration, Interval } from 'luxon';
import { Observable, pipe, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';

interface Co2ForecastState {
  readonly forecast: Co2Forecast;
}

const twoDays = Duration.fromISO('P2D');

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  forecast$: Observable<Co2Forecast> = this.select(state => state.forecast);

  constructor(
    private http: Co2EmissionPrognosisHttp,
    private danishDate: DanishDateStore
  ) {
    super(initialState);

    const everyMinute$ = timer(0, 60 * 1000);
    this.#queryForecast(
      this.select(this.danishDate.today$, everyMinute$, danishToday =>
        Interval.fromDateTimes(danishToday, danishToday.plus(twoDays))
      )
    );
  }

  #queryForecast = this.effect<Interval>(
    pipe(
      switchMap(forecastInterval =>
        this.http.get(forecastInterval).pipe(
          tapResponse(
            response => this.#updateForecast(response),
            () => this.#updateForecast([])
          )
        )
      )
    )
  );

  #updateForecast = this.updater<Co2Forecast>(
    (state, forecast): Co2ForecastState => ({
      ...state,
      forecast,
    })
  );
}

const initialState: Co2ForecastState = {
  forecast: [],
};

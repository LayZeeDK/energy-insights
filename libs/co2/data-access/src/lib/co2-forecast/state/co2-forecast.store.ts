import { Injectable } from '@angular/core';
import { Co2Forecast } from '@energy-insights/co2/domain';
import { DanishDateStore } from '@energy-insights/co2/util-date-times';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { DateTime, Duration, Interval } from 'luxon';
import { combineLatest, Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';

const twoDays = Duration.fromISO('P2D');

interface Co2ForecastState {
  readonly forecast: Co2Forecast;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  forecast$: Observable<Co2Forecast> = this.select(state => state.forecast);

  constructor(
    private http: Co2EmissionPrognosisHttp,
    danishDate: DanishDateStore
  ) {
    super(initialState);

    this.queryForecastEveryMinute(danishDate.today$);
  }

  private queryForecastEveryMinute = this.effect<DateTime>(danishToday$ =>
    combineLatest([danishToday$, timer(0, 60 * 1000)]).pipe(
      map(([danishToday]) =>
        Interval.fromDateTimes(danishToday, danishToday.plus(twoDays))
      ),
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

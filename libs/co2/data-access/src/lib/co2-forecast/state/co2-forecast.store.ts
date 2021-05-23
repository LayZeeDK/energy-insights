import { Injectable } from '@angular/core';
import { DanishDateStore } from '@energy-insights/co2/util-date-times';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { DateTime, Duration, Interval } from 'luxon';
import { combineLatest, Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Co2Forecast } from '../domain/co2-forecast';
import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisResponse } from '../http/co2-emission-prognosis-response-item';

const twoDays = Duration.fromISO('P2D');

interface Co2ForecastState {
  readonly forecast: Co2Forecast;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  forecast$: Observable<Co2Forecast> = this.select(state => state.forecast, {
    debounce: true,
  });

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
            result => this.updateForecast(result),
            () => this.updateForecast([])
          )
        )
      )
    )
  );

  private updateForecast = this.updater<Co2EmissionPrognosisResponse>(
    (state, response): Co2ForecastState => ({
      ...state,
      forecast: response,
    })
  );
}

const initialState: Co2ForecastState = {
  forecast: [],
};

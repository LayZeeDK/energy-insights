import { Injectable } from '@angular/core';
import { DanishDateStore } from '@energy-insights/co2/util-date-times';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { DateTime, Duration, Interval } from 'luxon';
import { combineLatest, Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisRecords } from '../http/co2-emission-prognosis-record';

const twoDays = Duration.fromISO('P2D');

interface Co2ForecastState {
  readonly records: Co2EmissionPrognosisRecords;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  );

  constructor(
    private http: Co2EmissionPrognosisHttp,
    danishDate: DanishDateStore
  ) {
    super(initialState);

    this.loadRecordsEveryMinute(danishDate.today$);
  }

  private loadRecordsEveryMinute = this.effect<DateTime>(danishToday$ =>
    combineLatest([danishToday$, timer(0, 60 * 1000)]).pipe(
      map(([danishToday]) =>
        Interval.fromDateTimes(danishToday, danishToday.plus(twoDays))
      ),
      switchMap(forecastInterval =>
        this.http.get(forecastInterval).pipe(
          tapResponse(
            records => this.updateRecords(records),
            () => this.updateRecords([])
          )
        )
      )
    )
  );

  private updateRecords = this.updater<Co2EmissionPrognosisRecords>(
    (state, records): Co2ForecastState => ({
      ...state,
      records,
    })
  );
}

const initialState: Co2ForecastState = {
  records: [],
};

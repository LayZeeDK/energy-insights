import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { combineLatest, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DateQuery } from '../date-query';
import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisRecords } from '../http/co2-emission-prognosis-record';
import { createCo2ForecastDateQuery } from './create-co2-forecast-date-query';

interface Co2ForecastState {
  readonly dateQuery: DateQuery;
  readonly records: Co2EmissionPrognosisRecords;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  private dateQuery$: Observable<DateQuery> = this.select(
    state => state.dateQuery
  );

  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  );

  constructor(private http: Co2EmissionPrognosisHttp) {
    super(createInitialState(new Date()));

    this.loadRecordsEveryMinute(this.dateQuery$);
  }

  private loadRecordsEveryMinute = this.effect<DateQuery>(dateQuery$ =>
    combineLatest([dateQuery$, timer(0, 60 * 1000)]).pipe(
      switchMap(([dateQuery]) =>
        this.http.get(dateQuery).pipe(
          tapResponse(
            records => this.updateRecords(records),
            () => this.updateRecords([])
          )
        )
      )
    )
  );

  private updateRecords = this.updater<Co2EmissionPrognosisRecords>(
    (state, records) => ({
      ...state,
      records,
    })
  );
}

function createInitialState(now: Date): Co2ForecastState {
  return {
    dateQuery: createCo2ForecastDateQuery(now),
    records: [],
  };
}

import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { combineLatest, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from './co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisRecords } from './co2-emission-prognosis-record';

interface Co2ForecastState {
  readonly records: Co2EmissionPrognosisRecords;
}

interface QueryFilter {
  readonly from: Date;
  readonly to: Date;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  );

  constructor(private http: Co2EmissionPrognosisHttp) {
    super(initialState);

    this.loadRecordsEveryMinute({
      from: new Date(),
      to: new Date(),
    });
  }

  private loadRecordsEveryMinute = this.effect<QueryFilter>(queryFilter$ =>
    combineLatest([queryFilter$, timer(0, 60 * 1000)]).pipe(
      switchMap(queryFilter =>
        this.http.get().pipe(
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

const initialState: Co2ForecastState = {
  records: [],
};

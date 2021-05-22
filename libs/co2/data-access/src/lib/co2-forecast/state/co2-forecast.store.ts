import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { DateTime, Duration, Interval } from 'luxon';
import { combineLatest, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisRecords } from '../http/co2-emission-prognosis-record';
import { danishZone } from './../date-time-util/danish-zone';

const twoDays = Duration.fromISO('P2D');

interface Co2ForecastState {
  readonly danishToday: DateTime;
  readonly records: Co2EmissionPrognosisRecords;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  private danishToday$: Observable<DateTime> = this.select(
    state => state.danishToday
  );

  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  );

  constructor(private http: Co2EmissionPrognosisHttp) {
    super(createInitialState(DateTime.now()));

    this.loadRecordsEveryMinute(this.danishToday$);
  }

  private loadRecordsEveryMinute = this.effect<DateTime>(danishToday$ =>
    combineLatest([danishToday$, timer(0, 60 * 1000)]).pipe(
      switchMap(([danishToday]) =>
        this.http
          .get(Interval.fromDateTimes(danishToday, danishToday.plus(twoDays)))
          .pipe(
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

function createInitialState(localNow: DateTime): Co2ForecastState {
  return {
    danishToday: localNow.setZone(danishZone).startOf('day'),
    records: [],
  };
}

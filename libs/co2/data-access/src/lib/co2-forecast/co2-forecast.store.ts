import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

import { Co2EmissionPrognosisRecords } from './co2-emission-prognosis-record';

export interface Co2ForecastState {
  readonly records: Co2EmissionPrognosisRecords;
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<Co2EmissionPrognosisRecords> = this.select(
    state => state.records
  );

  constructor() {
    super(initialState);
  }
}

const initialState: Co2ForecastState = {
  records: [],
};

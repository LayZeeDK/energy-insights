import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';

export interface Co2ForecastState {
  readonly records: readonly Co2EmissionPrognosisRecord[];
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  constructor() {
    super(initialState);
  }
}

const initialState: Co2ForecastState = {
  records: [],
};

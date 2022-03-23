import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  Co2ForecastContainer,
  Co2ForecastContainerScam,
} from './co2-forecast.container';

const routes: Routes = [
  {
    path: '',
    component: Co2ForecastContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), Co2ForecastContainerScam],
})
export class Co2FeatureForecastModule {}

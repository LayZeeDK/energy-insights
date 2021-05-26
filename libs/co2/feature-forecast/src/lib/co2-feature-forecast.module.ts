import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  Co2ForecastContainerComponent,
  Co2ForecastContainerScam,
} from './co2-forecast-container.sfc';

const routes: Routes = [
  {
    path: '',
    component: Co2ForecastContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), Co2ForecastContainerScam],
})
export class Co2FeatureForecastModule {}

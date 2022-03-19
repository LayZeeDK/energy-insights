import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {
  EnergyInsightsAppComponent,
  EnergyInsightsAppScam,
} from './energy-insights-app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'co2',
  },
  {
    path: 'co2',
    loadChildren: () =>
      import('@energy-insights/co2/feature-forecast').then(
        esModule => esModule.Co2FeatureForecastModule
      ),
  },
];

@NgModule({
  bootstrap: [EnergyInsightsAppComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EnergyInsightsAppScam,
  ],
})
export class EnergyInsightsAppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EnergyInsightsAppComponent,
  EnergyInsightsAppScam,
} from './energy-insights-app.component';

@NgModule({
  bootstrap: [EnergyInsightsAppComponent],
  imports: [BrowserModule, EnergyInsightsAppScam],
})
export class EnergyInsightsAppModule {}

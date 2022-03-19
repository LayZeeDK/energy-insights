import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  EnergyInsightsAppComponent,
  EnergyInsightsAppScam,
} from './energy-insights-app.component';
import { EnergyInsightsCoreModule } from './energy-insights-core.module';

@NgModule({
  bootstrap: [EnergyInsightsAppComponent],
  imports: [
    BrowserAnimationsModule,
    EnergyInsightsCoreModule,
    EnergyInsightsAppScam,
  ],
})
export class EnergyInsightsAppModule {}

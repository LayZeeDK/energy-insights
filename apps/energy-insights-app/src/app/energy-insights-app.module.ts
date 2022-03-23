import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnergyInsightsShellModule } from '@energy-insights/root/shell';

import {
  EnergyInsightsAppComponent,
  EnergyInsightsAppScam,
} from './energy-insights-app.component';

@NgModule({
  bootstrap: [EnergyInsightsAppComponent],
  imports: [
    BrowserAnimationsModule,
    EnergyInsightsShellModule,
    EnergyInsightsAppScam,
  ],
})
export class EnergyInsightsAppModule {}

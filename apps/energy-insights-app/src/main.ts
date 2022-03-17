import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { environment } from '@energy-insights/root/environments';

import { EnergyInsightsAppModule } from './app/energy-insights-app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowser()
  .bootstrapModule(EnergyInsightsAppModule, {
    ngZoneEventCoalescing: true,
    ngZoneRunCoalescing: true,
  })
  .catch((error: unknown) => console.error(error));

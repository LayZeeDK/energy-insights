import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { environment } from '@energy-insights/root/environments';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
    ngZoneRunCoalescing: true,
  })
  .catch((error: unknown) => console.error(error));

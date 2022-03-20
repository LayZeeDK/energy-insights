import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { co2RoutePath } from '@energy-insights/co2/routing';

@Component({
  template: '<a routerLink="/co2">CO2</a>',
})
export class PlaceholderComponent {}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: 'co2',
    component: PlaceholderComponent,
  },
  {
    path: co2RoutePath,
    loadChildren: () =>
      import('@energy-insights/co2/feature-forecast').then(
        esModule => esModule.Co2FeatureForecastModule
      ),
  },
];

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
})
export class EnergyInsightsCoreModule {}

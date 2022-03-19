import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
})
export class EnergyInsightsCoreModule {}

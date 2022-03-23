import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { co2ForecastRoutePath } from '@energy-insights/co2/routing';

import { Co2ShellComponent, Co2ShellScam } from './co2-shell.component';

const routes: Routes = [
  {
    path: '',
    component: Co2ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: co2ForecastRoutePath,
      },
      {
        path: co2ForecastRoutePath,
        loadChildren: () =>
          import('@energy-insights/co2/feature-forecast').then(
            esModule => esModule.Co2FeatureForecastModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), Co2ShellScam],
})
export class Co2ShellModule {}

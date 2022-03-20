import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { co2RoutePath } from '@energy-insights/co2/routing';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'co2',
  },
  {
    path: co2RoutePath,
    loadChildren: () =>
      import('@energy-insights/co2/shell').then(
        esModule => esModule.Co2ShellModule
      ),
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
})
export class EnergyInsightsCoreModule {}

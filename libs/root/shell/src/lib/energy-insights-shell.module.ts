import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { co2DomainRoutePath } from '@energy-insights/co2/routing';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: co2DomainRoutePath,
  },
  {
    path: co2DomainRoutePath,
    loadChildren: () =>
      import('@energy-insights/co2/shell').then(
        esModule => esModule.Co2ShellModule
      ),
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
})
export class EnergyInsightsShellModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { Co2ForecastStore } from '@energy-insights/co2/data-access';

import { Co2ForecastScam } from './co2-forecast.sfc';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'nrg-co2-forecast',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<nrg-co2-forecast-ui></nrg-co2-forecast-ui>`,
  viewProviders: [Co2ForecastStore],
})
export class Co2ForecastContainerComponent {}

@NgModule({
  declarations: [Co2ForecastContainerComponent],
  exports: [Co2ForecastContainerComponent],
  imports: [CommonModule, Co2ForecastScam],
})
export class Co2ForecastContainerScam {}

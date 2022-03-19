import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { Co2ForecastStore } from '@energy-insights/co2/data-access';
import { Co2Forecast } from '@energy-insights/co2/domain';
import { Observable } from 'rxjs';

import { Co2ForecastScam } from './co2-forecast.sfc';

const selector = 'nrg-co2-forecast';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector,
  styles: [
    `
      ${selector} {
        display: block;
      }
    `,
  ],
  template: `<nrg-co2-forecast-ui
    [forecast]="forecast$ | async"
  ></nrg-co2-forecast-ui>`,
  viewProviders: [Co2ForecastStore],
})
export class Co2ForecastContainerComponent {
  forecast$: Observable<Co2Forecast>;

  constructor(co2ForecastStore: Co2ForecastStore) {
    this.forecast$ = co2ForecastStore.forecast$;
  }
}

@NgModule({
  declarations: [Co2ForecastContainerComponent],
  imports: [CommonModule, Co2ForecastScam],
})
export class Co2ForecastContainerScam {}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { Co2Forecast, Co2ForecastDataPoint } from '@energy-insights/co2/domain';

import { identifyCo2ForecastDataPoint } from './identify-co2-forecast-data-point';

const selector = 'nrg-co2-forecast-ui';

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
  template: `
    <h1>CO2 forecast</h1>

    <table>
      <thead>
        <tr>
          <th>Date and time</th>

          <th>gCO2/kWh</th>

          <th>Price area</th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let dataPoint of forecast; trackBy: trackByDataPoint">
          <td class="u-text--left">
            {{ dataPoint.minutes5Utc.toJSDate() | date: 'long' }}
          </td>

          <td class="u-text--right">
            {{ dataPoint.co2Emission | number: '1.0' }}
          </td>

          <td class="u-text--right">{{ dataPoint.priceArea }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Co2ForecastComponent {
  @Input()
  forecast: Co2Forecast = [];

  trackByDataPoint(_index: number, dataPoint: Co2ForecastDataPoint): string {
    return identifyCo2ForecastDataPoint(dataPoint);
  }
}

@NgModule({
  declarations: [Co2ForecastComponent],
  exports: [Co2ForecastComponent],
  imports: [CommonModule],
})
export class Co2ForecastScam {}

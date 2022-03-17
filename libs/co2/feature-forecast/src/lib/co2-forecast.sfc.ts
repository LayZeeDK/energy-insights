import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { Co2Forecast } from '@energy-insights/co2/domain';

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
          <th>gCO2eq/kWh</th>
          <th>Price area</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let dataPoint of forecast">
          <td data-testid="date-time-cell">
            {{ dataPoint.minutes5Utc.toJSDate() | date: 'long' }}
          </td>
          <td>{{ dataPoint.co2Emission | number: '1.2' }}</td>
          <td>{{ dataPoint.priceArea }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class Co2ForecastComponent {
  #forecast: Co2Forecast = [];

  // Input setter type hint
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static ngAcceptInputType_forecast: Co2Forecast | null;
  @Input()
  set forecast(forecast: Co2Forecast) {
    forecast ??= [];

    this.#forecast = forecast;
  }
  get forecast(): Co2Forecast {
    return this.#forecast;
  }
}

@NgModule({
  declarations: [Co2ForecastComponent],
  exports: [Co2ForecastComponent],
  imports: [CommonModule],
})
export class Co2ForecastScam {}

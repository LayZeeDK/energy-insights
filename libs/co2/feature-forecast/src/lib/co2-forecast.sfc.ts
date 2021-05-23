import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { Co2Forecast } from '@energy-insights/co2/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'nrg-co2-forecast-ui',
  styles: [
    `
      :host {
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
      <tr *ngFor="let dataPoint of forecast">
        <td>{{ dataPoint.minutes5Utc.toJSDate() | date }}</td>
        <td>{{ dataPoint.co2Emission | number: '1.2' }}</td>
        <td>{{ dataPoint.priceArea }}</td>
      </tr>
    </table>
  `,
})
export class Co2ForecastComponent {
  static ngAcceptInputType_forecast: Co2Forecast | null;

  #forecast: Co2Forecast = [];

  @Input()
  get forecast(): Co2Forecast {
    return this.#forecast;
  }
  set forecast(forecast: Co2Forecast) {
    forecast ??= [];

    this.#forecast = forecast;
  }
}

@NgModule({
  declarations: [Co2ForecastComponent],
  exports: [Co2ForecastComponent],
  imports: [CommonModule],
})
export class Co2ForecastScam {}

import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

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
  template: ` <h1>CO2 forecast</h1> `,
})
export class Co2ForecastComponent {}

@NgModule({
  declarations: [Co2ForecastComponent],
  exports: [Co2ForecastComponent],
})
export class Co2ForecastScam {}

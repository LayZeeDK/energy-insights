import { Component, NgModule } from '@angular/core';

@Component({
  // The root element is intentionally named after the application
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'energy-insights-app',
  template: `<h1>Energy Insights</h1>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EnergyInsightsAppComponent {}

@NgModule({
  declarations: [EnergyInsightsAppComponent],
})
export class EnergyInsightsAppScam {}

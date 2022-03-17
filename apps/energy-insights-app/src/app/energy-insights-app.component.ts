import { Component, NgModule } from '@angular/core';

@Component({
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

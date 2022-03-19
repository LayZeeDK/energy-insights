import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Co2FeatureForecastModule } from '@energy-insights/co2/feature-forecast';

@Component({
  // The root element is intentionally named after the application
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'energy-insights-app',
  template: `
    <header class="flex">
      <img alt="Nx logo" width="75" src="/assets/images/nx-logo-white.svg" />
      <h1>Welcome to {{ title }}!</h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: sans-serif;
        min-width: 300px;
        max-width: 600px;
        margin: 50px auto;
      }

      .gutter-left {
        margin-left: 9px;
      }

      .col-span-2 {
        grid-column: span 2;
      }

      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      header {
        background-color: #143055;
        color: white;
        padding: 5px;
        border-radius: 3px;
      }

      main {
        padding: 0 36px;
      }

      p {
        text-align: center;
      }

      h1 {
        text-align: center;
        margin-left: 18px;
        font-size: 24px;
      }

      h2 {
        text-align: center;
        font-size: 20px;
        margin: 40px 0 10px 0;
      }
    `,
  ],
})
export class EnergyInsightsAppComponent {
  title = 'Energy Insights';
}

@NgModule({
  declarations: [EnergyInsightsAppComponent],
  imports: [Co2FeatureForecastModule, RouterModule],
})
export class EnergyInsightsAppScam {}

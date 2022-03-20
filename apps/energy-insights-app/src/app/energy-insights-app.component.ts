import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { EnergyInsightsShellScam } from '@energy-insights/root/shell';

// The root element is intentionally named after the application
// eslint-disable-next-line @angular-eslint/component-selector
export const selector = 'energy-insights-app';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector,
  template: `<nrg-shell></nrg-shell>`,
  styles: [
    `
      ${selector} {
        display: block;
      }
    `,
  ],
})
export class EnergyInsightsAppComponent {}

@NgModule({
  declarations: [EnergyInsightsAppComponent],
  imports: [EnergyInsightsShellScam],
})
export class EnergyInsightsAppScam {}

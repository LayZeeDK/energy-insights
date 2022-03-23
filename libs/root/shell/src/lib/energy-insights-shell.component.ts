import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellHeaderScam } from './shell-header.component';

const selector = 'nrg-shell';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector,
  template: `
    <header nrg-shell-header></header>

    <main class="${selector}__outlet">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      ${selector} {
        display: block;
        margin: 50px auto;
        min-width: 300px;
        max-width: 600px;

        font-family: sans-serif;
      }

      .${selector}__outlet {
        padding: 0 36px;
      }
    `,
  ],
})
export class EnergyInsightsShellComponent {
  title = 'Energy Insights';
}

@NgModule({
  declarations: [EnergyInsightsShellComponent],
  exports: [EnergyInsightsShellComponent],
  imports: [RouterModule, ShellHeaderScam],
})
export class EnergyInsightsShellScam {}

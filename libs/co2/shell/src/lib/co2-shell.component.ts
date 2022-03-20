import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

const selector = 'nrg-co2-shell';

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
  template: `<router-outlet></router-outlet>`,
})
export class Co2ShellComponent {}

@NgModule({
  declarations: [Co2ShellComponent],
  imports: [RouterModule],
})
export class Co2ShellScam {}

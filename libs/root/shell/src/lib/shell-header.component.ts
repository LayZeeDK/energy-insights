import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

const selector = 'nrg-shell-header';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // Allow usage with accessible element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[${selector}]`,
  template: `
    <img alt="Nx logo" width="75" src="/assets/images/nx-logo-white.svg" />

    <h1 class="${selector}__title">Welcome to {{ title }}!</h1>
  `,
  styles: [
    `
      [${selector}] {
        border-radius: 3px;
        padding: 5px;

        background-color: #143055;
        color: white;
      }

      .${selector}__title {
        margin-left: 18px;

        font-size: 24px;
        text-align: center;
      }
    `,
  ],
})
export class ShellHeaderComponent {
  @HostBinding('className')
  className = 'o-center';

  title = 'Energy Insights';
}

@NgModule({
  declarations: [ShellHeaderComponent],
  exports: [ShellHeaderComponent],
})
export class ShellHeaderScam {}

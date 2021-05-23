import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'nrg-forecast',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: ``,
})
export class Co2ForecastContainerComponent {}

@NgModule({
  declarations: [Co2ForecastContainerComponent],
  exports: [Co2ForecastContainerComponent],
  imports: [CommonModule],
})
export class Co2ForecastContainerScam {}

import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nrg-co2-shell',
  template: `<router-outlet></router-outlet>`,
})
export class Co2ShellComponent {}

@NgModule({
  declarations: [Co2ShellComponent],
  imports: [RouterModule],
})
export class Co2ShellScam {}

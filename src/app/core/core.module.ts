import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResponsiveDirective} from './directives/responsive.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ResponsiveDirective,
  ],
  exports: [
    ResponsiveDirective,
  ]
})
export class CoreModule {
}

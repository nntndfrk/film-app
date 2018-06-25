import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {FooterComponent} from './footer/footer.component';
import {LoadMoreComponent} from './load-more/load-more.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SpinnerComponent,
    FooterComponent,
    LoadMoreComponent
  ],
  exports: [
    SpinnerComponent,
    FooterComponent,
    LoadMoreComponent
  ]
})
export class SharedModule {
}

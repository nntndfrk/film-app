import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MainComponent} from './main/main.component';
import {FilmListComponent} from './film-list/film-list.component';
import {FilmItemComponent} from './film-item/film-item.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleItemComponent} from './people-item/people-item.component';
import {AppRoutingModule} from './app-routing.module';
import {FilmSearchComponent} from './film-search/film-search.component';
import {HttpClientModule} from '@angular/common/http';
import {ImgFallbackModule} from 'ngx-img-fallback';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FilmListComponent,
    FilmItemComponent,
    PeopleListComponent,
    PeopleItemComponent,
    FilmSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImgFallbackModule,
    CoreModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

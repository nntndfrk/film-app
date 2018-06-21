import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {FilmListComponent} from './film-list/film-list.component';
import {PeopleListComponent} from './people-list/people-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: MainComponent},
  {path: 'films-list', component: FilmListComponent},
  {path: 'people-list', component: PeopleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

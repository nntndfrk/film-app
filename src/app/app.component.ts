import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: object[] = [
    { path: '/main', label: 'Discover', active: 'active'},
    { path: '/films-list', label: 'Movies', active: 'active'},
    { path: '/people-list', label: 'People', active: 'active'},
    { path: '/about', label: 'About', active: 'active'},
  ];
}

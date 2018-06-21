import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

import {People} from '../people';
import {PeopleData} from '../people-data';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  persons: People[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPopularPeople(1).subscribe((data: PeopleData) => {
      this.persons = data.results;
    });
  }

}

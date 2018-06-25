import {Component, OnInit} from '@angular/core';

import {ApiService} from '../api.service';
import {FavoriteService} from '../favorite.service';
import {People} from '../core/models/people';
import {PeopleData} from '../core/models/people-data';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  persons: People[];
  personsData: People[];
  favoriteList: Array<number>;
  totalPages: number;
  isLoad = false;

  constructor(
    private apiService: ApiService,
    private favoriteService: FavoriteService
  ) {
  }

  ngOnInit() {
    this.favoriteList = this.favoriteService.getPoplesFavorite();
    this.apiService.getPopularPeople(1).subscribe((data: PeopleData) => {
      this.isLoad = true;
      this.personsData = data.results;
      this.persons = [...this.personsData];
      this.buildFavorites();
      this.totalPages = data.total_pages;
    });
  }

  buildFavorites() {
    this.favoriteList = this.favoriteService.getPoplesFavorite();
    this.persons.map(person => {
      person.isFavorite = this.favoriteList.indexOf(person.id) > -1;
    });
  }

  getNextPage(pageNumber) {
    this.isLoad = false;
    this.apiService.getPopularPeople(pageNumber).subscribe((data: PeopleData) => {
      this.isLoad = true;
      this.personsData = [...this.personsData, ...data.results];
      this.persons = [...this.personsData];
      this.buildFavorites();
    });
  }

  starPerson(id: number) {
    if (this.favoriteList.indexOf(id) > -1) {
      this.favoriteService.removePeopleFromFavorites(id);
    } else {
      this.favoriteService.addPeopleToFavorite(id);
    }

    this.buildFavorites();
  }

}

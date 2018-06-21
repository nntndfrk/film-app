import {Component, OnInit} from '@angular/core';

import {SearchService} from './search.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {
  searchText = '';

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  onSearch() {
    this.searchService.makeSearch(this.searchText);
    this.searchText = '';
  }

}

import {Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {ApiService} from '../api.service';
import {SearchService} from '../film-search/search.service';
import {Subscription} from 'rxjs';
import {FavoriteService} from '../favorite.service';
import {Film} from '../core/models/film';
import {FilmData} from '../core/models/film-data';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit, OnDestroy {
  filmsData: Array<Film>;
  films: Array<Film> = [];
  favoriteList: Array<number>;
  bookmarksList: Array<number>;
  totalPages: number;
  isLoad = false;
  subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private searchService: SearchService,
    private favoriteService: FavoriteService
  ) {
  }

  ngOnInit() {
    this.favoriteList = this.favoriteService.getFilmsFavorite();
    this.bookmarksList = this.favoriteService.getFilmsBookmark();
    this.apiService.getPopularFilms(1).subscribe((data: FilmData) => {
      this.isLoad = true;
      this.filmsData = data.results;
      this.films = [...this.filmsData];
      this.buildFavorites();
      this.totalPages = data.total_pages;
    });

    this.subscription = this.searchService.searchMake$.subscribe((searchString: string) => {
      this.makeSearch(searchString);
    });
  }

  buildFavorites() {
    this.favoriteList = this.favoriteService.getFilmsFavorite();
    this.bookmarksList = this.favoriteService.getFilmsBookmark();
    this.films.map(film => {
      film.isFavorite = this.favoriteList.indexOf(film.id) > -1;
      film.isBookMarked = this.bookmarksList.indexOf(film.id) > -1;
    });
  }

  makeSearch(searchString = '') {
    if (searchString.length === 0) {
      this.films = [...this.filmsData];
    } else {
      this.films = [...this.filmsData].filter((film: Film) => {
        return film.title.toLowerCase().includes(searchString.toLowerCase().trim());
      });
    }
  }

  getNextPage(pageNumber) {
    this.isLoad = false;
    this.apiService.getPopularFilms(pageNumber).subscribe((data: FilmData) => {
      this.isLoad = true;
      this.filmsData = [...this.filmsData, ...data.results];
      this.films = [...this.filmsData];
      this.buildFavorites();
    });
  }

  bookmarkFilm(id: number) {
    if (this.bookmarksList.indexOf(id) > -1) {
      this.favoriteService.removeFilmFromBookmarks(id);
    } else {
      this.favoriteService.addFilmToBookmarks(id);
    }

    this.buildFavorites();
  }

  starFilm(id: number) {
    if (this.favoriteList.indexOf(id) > -1) {
      this.favoriteService.removeFilmFromFavorites(id);
    } else {
      this.favoriteService.addFilmToFavorite(id);
    }

    this.buildFavorites();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

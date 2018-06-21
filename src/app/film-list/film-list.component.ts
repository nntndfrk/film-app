import {Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {ApiService} from '../api.service';
import {Film} from '../film';
import {FilmData} from '../film-data';
import {SearchService} from '../film-search/search.service';
import {Subscription} from 'rxjs';
import {FavoriteService} from './favorite.service';

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
  isLoad = true;
  subscription: Subscription;
  screenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private apiService: ApiService,
    private searchService: SearchService,
    private favoriteService: FavoriteService
  ) {
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.favoriteList = this.favoriteService.getFavorite();
    this.bookmarksList = this.favoriteService.getBookmarks();
    this.apiService.getPopularFilms(1).subscribe((data: FilmData) => {
      this.isLoad = false;
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
    this.favoriteList = this.favoriteService.getFavorite();
    this.bookmarksList = this.favoriteService.getBookmarks();
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
    this.isLoad = true;
    this.apiService.getPopularFilms(pageNumber).subscribe((data: FilmData) => {
      this.isLoad = false;
      this.filmsData = [...this.filmsData, ...data.results];
      this.films = [...this.filmsData];
      this.buildFavorites();
    });
  }

  bookmarkFilm(id: number) {
    if (this.bookmarksList.indexOf(id) > -1) {
      this.favoriteService.removeFromBookmarks(id);
    } else {
      this.favoriteService.addToBookmarks(id);
    }

    this.buildFavorites();
  }

  starFilm(id: number) {
    if (this.favoriteList.indexOf(id) > -1) {
      this.favoriteService.removeFromFavorites(id);
    } else {
      this.favoriteService.addToFavorite(id);
    }

    this.buildFavorites();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

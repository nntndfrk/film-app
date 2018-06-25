import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  filmsFavoriteList: Array<number> = [];
  filmsBookmarkList: Array<number> = [];
  peopleFavoriteList: Array<number> = [];

  constructor() {
    this.getDataFromLocalstorage();
  }

  addFilmToFavorite(id: number) {
    this.filmsFavoriteList.push(id);
    this.saveData();
  }

  addFilmToBookmarks(id: number) {
    this.filmsBookmarkList.push(id);
    this.saveData();
  }

  addPeopleToFavorite(id: number) {
    this.peopleFavoriteList.push(id);
    this.saveData();
  }

  removeFilmFromFavorites(id: number) {
    const index = this.filmsFavoriteList.indexOf(id);
    if (index > -1) {
      this.filmsFavoriteList.splice(index, 1);
    }
    this.saveData();
  }


  removeFilmFromBookmarks(id: number) {
    const index = this.filmsBookmarkList.indexOf(id);
    if (index > -1) {
      this.filmsBookmarkList.splice(index, 1);
    }
    this.saveData();
  }

  removePeopleFromFavorites(id: number) {
    const index = this.peopleFavoriteList.indexOf(id);
    if (index > -1) {
      this.peopleFavoriteList.splice(index, 1);
    }
    this.saveData();
  }

  getFilmsBookmark() {
    return this.filmsBookmarkList;
  }

  getFilmsFavorite() {
    return this.filmsFavoriteList;
  }

  getPoplesFavorite() {
    return this.peopleFavoriteList;
  }

  getDataFromLocalstorage() {
    const filmsFavoriteStorageValue = localStorage.getItem('filmsFavoriteList');
    if (filmsFavoriteStorageValue) {
      this.filmsFavoriteList = filmsFavoriteStorageValue
        .split(',')
        .map(item => Number.parseInt(item));
    }


    const filmsBookmarkStorageValue = localStorage.getItem('filmsBookmarkList');
    if (filmsBookmarkStorageValue) {
      this.filmsBookmarkList = filmsBookmarkStorageValue
        .split(',')
        .map(item => Number.parseInt(item));
    }


    const peopleFavoriteStorageValue = localStorage.getItem('peopleFavoriteList');
    if (peopleFavoriteStorageValue) {
      this.peopleFavoriteList = peopleFavoriteStorageValue
        .split(',')
        .map(item => Number.parseInt(item));
    }
  }

  saveData() {
    localStorage.setItem('filmsFavoriteList', this.filmsFavoriteList.join());
    localStorage.setItem('filmsBookmarkList', this.filmsBookmarkList.join());
    localStorage.setItem('peopleFavoriteList', this.peopleFavoriteList.join());
  }


}

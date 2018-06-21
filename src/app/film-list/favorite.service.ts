import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteList: Array<number> = [];
  bookmarksList: Array<number> = [];

  constructor() {
    setTimeout(() => {
      this.getDataFromLocalstorage();
    }, 0);
  }

  addToFavorite(id: number) {
    this.favoriteList.push(id);
    this.saveData();
  }

  addToBookmarks(id: number) {
    this.bookmarksList.push(id);
    this.saveData();
  }

  removeFromFavorites(id: number) {
    const index = this.favoriteList.indexOf(id);
    if (index > -1) {
      this.favoriteList.splice(index, 1);
    }
    this.saveData();
  }


  removeFromBookmarks(id: number) {
    const index = this.bookmarksList.indexOf(id);
    if (index > -1) {
      this.bookmarksList.splice(index, 1);
    }
    this.saveData();
  }

  getBookmarks() {
    return this.bookmarksList;
  }

  getFavorite() {
    return this.favoriteList;
  }

  getDataFromLocalstorage() {
    this.favoriteList = localStorage
      .getItem('favoriteList')
      .split(',')
      .map(item => Number.parseInt(item));

    this.bookmarksList = localStorage
      .getItem('bookmarksList')
      .split(',')
      .map(item => Number.parseInt(item));
  }

  saveData() {
    localStorage.setItem('favoriteList', this.favoriteList.join());
    localStorage.setItem('bookmarksList', this.bookmarksList.join());
  }


}

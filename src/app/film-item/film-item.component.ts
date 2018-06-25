import {Component, EventEmitter, Input, Output, OnInit, OnChanges} from '@angular/core';
import {ApiService} from '../api.service';
import {Film} from '../core/models/film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;

  imgPath: string;
  midImgPath: string;
  popularityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Output() makeFavorite = new EventEmitter<number>();
  @Output() makeBookmark = new EventEmitter<number>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

    this.imgPath = this.apiService.imgPath;
    this.midImgPath = this.apiService.midImgPath;
  }

  buildImgUrl(url) {
    return this.midImgPath + url;
  }

  addToFavorite() {
    this.makeFavorite.emit(this.film.id);
  }

  addToBookmarks() {
    this.makeBookmark.emit(this.film.id);
  }

  div(val) {
    return (val - val % 10) / 10;
  }

}

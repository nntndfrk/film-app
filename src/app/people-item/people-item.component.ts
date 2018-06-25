import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {People} from '../core/models/people';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {
  @Input() people: People;
  imgPath: string;
  midImgPath: string;
  popularityList = [1, 2, 3, 4, 5];

  @Output() makeFavorite = new EventEmitter<number>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.imgPath = this.apiService.imgPath;
    this.midImgPath = this.apiService.midImgPath;
  }

  buildImgUrl(url) {
    return this.midImgPath + url;
  }

  div(val) {
    return (val - val % 5) / 5;
  }

  setDefaultPic(pic) {
    return 'assets/images/my-image.png';
  }

  addToFavorite() {
    this.makeFavorite.emit(this.people.id);
  }

}

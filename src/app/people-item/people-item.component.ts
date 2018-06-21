import {Component, Input, OnInit} from '@angular/core';
import {People} from '../people';
import {ApiService} from '../api.service';

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

}

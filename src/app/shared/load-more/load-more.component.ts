import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Input() totalPages;
  @Output() pageEmitter = new EventEmitter();
  pageCounter = 1;
  end = false;

  constructor() {
  }

  ngOnInit() {
  }

  getNextPage() {
    this.pageCounter += 1;
    this.pageEmitter.emit(this.pageCounter);
  }

}

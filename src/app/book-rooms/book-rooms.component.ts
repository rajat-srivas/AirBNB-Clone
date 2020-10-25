import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';


@Component({
  selector: 'app-book-rooms',
  templateUrl: './book-rooms.component.html',
  styleUrls: ['./book-rooms.component.css']
})
export class BookRoomsComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
  }

}

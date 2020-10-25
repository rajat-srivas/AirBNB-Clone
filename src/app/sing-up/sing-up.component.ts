import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  isLogin = false;
  constructor() { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
  }

  changeUserLoginStatus() {
    this.isLogin = !this.isLogin;
  }

}

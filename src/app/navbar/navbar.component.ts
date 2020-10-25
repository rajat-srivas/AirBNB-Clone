import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SingUpComponent } from '../sing-up/sing-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bsModalRef: BsModalRef;
config = {
  animated: true,
  keyboard: true
};

  constructor(private modalService: BsModalService) {}
  openSignUpModal() {
    this.bsModalRef = this.modalService.show(SingUpComponent, this.config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
  }

}

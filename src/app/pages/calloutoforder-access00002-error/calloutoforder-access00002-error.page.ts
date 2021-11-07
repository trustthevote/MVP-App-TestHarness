import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';

@Component({
  selector: 'app-calloutoforder-access00002-error',
  templateUrl: './calloutoforder-access00002-error.page.html',
  styleUrls: ['./calloutoforder-access00002-error.page.scss'],
})
export class CalloutoforderAccess00002ErrorPage implements OnInit {
  results = [];
  userObject: any;
  constructor(private route: Router, private localStorageRef: LocalStorageRef) {}

  ngOnInit() {
    this.userObject = JSON.parse(this.localStorageRef.getLocalStorage().getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].calloutoforder_access00002_error;
      });
    if (this.userObject.lastName !== undefined) {
      const lastName = this.userObject.lastName.charAt(0).toUpperCase() + this.userObject.lastName.slice(1);
      if (lastName === 'OOOOO') {
      }
    }
  }
  confirm() {
    this.route.navigate(['/request-access-code']);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';

@Component({
  selector: 'app-check-network',
  templateUrl: './check-network.page.html',
  styleUrls: ['./check-network.page.scss'],
})
export class CheckNetworkPage implements OnInit {
  results = [];
  userObject: any;
  constructor(private route: Router, private localStorageRef: LocalStorageRef) {}

  ngOnInit() {
    this.userObject = JSON.parse(this.localStorageRef.getLocalStorage().getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].check_network_request00001_error;
      });
    if (this.userObject.lastName !== undefined) {
      const lastName = this.userObject.lastName.charAt(0).toUpperCase() + this.userObject.lastName.slice(1);
      if (lastName === 'OOOO') {
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

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';

@Component({
  selector: 'app-ballot-form',
  templateUrl: './ballot-form.page.html',
  styleUrls: ['./ballot-form.page.scss'],
})
export class BallotFormPage implements OnInit {
  paramData: any;
  precinct: any;
  results = [];
  userObject: any;
  precinctNum: number;

  constructor(private router: Router, private localStorageRef: LocalStorageRef) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    this.userObject = JSON.parse(this.localStorageRef.getLocalStorage().getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].ballot_form;
      });
    if (this.userObject.lastName !== undefined) {
      const lastName = this.userObject.lastName.charAt(0).toUpperCase() + this.userObject.lastName.slice(1);
      if (lastName.includes('A', 0)) {
        this.precinctNum = 1;
      } else if (lastName.includes('B', 0)) {
        this.precinctNum = 2;
      } else if (lastName.includes('C', 0)) {
        this.precinctNum = 3;
      } else {
        this.precinctNum = 4;
      }
    }
  }
  goToComplete() {
    const naviExtras: NavigationExtras = {
      state: {
        user: this.paramData,
      },
    };
    this.router.navigate(['ballot-complete'], naviExtras);
  }

  goBack() {
    this.router.navigate(['ballot']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { UserService } from 'src/app/class/user/user.service';

@Component({
  selector: 'app-ballot-form',
  templateUrl: './ballot-form.page.html',
  styleUrls: ['./ballot-form.page.scss'],
})
export class BallotFormPage implements OnInit {
  paramData: any;
  precinct: any;
  results = [];
  precinctNum: number;

  constructor(private router: Router, private userService: UserService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].ballot_form;
      });

    const lastName = this.userService.getUser().lastName;
    if (lastName !== undefined) {
      const modifiedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      if (modifiedLastName.includes('A', 0)) {
        this.precinctNum = 1;
      } else if (modifiedLastName.includes('B', 0)) {
        this.precinctNum = 2;
      } else if (modifiedLastName.includes('C', 0)) {
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

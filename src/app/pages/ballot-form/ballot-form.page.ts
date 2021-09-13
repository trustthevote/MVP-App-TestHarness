import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    // const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
    // if (lastName.includes('A', 0)) {
    //   this.precinct = 'Your Ballot is for Precinct #1';
    // } else if(lastName.includes('B', 0)) {
    //   this.precinct = 'Your Ballot is for Precinct #2';
    // } else if (lastName.includes('C', 0)) {
    //   this.precinct = 'Your Ballot is for Precinct #3';
    // } else {
    //   this.precinct = 'Your Ballot is for Precinct #4';
    // }
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['ballot_form'];
      console.log("results: ", this.results);
    });
    if (this.userObject.lastname != undefined) {
      // const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
      const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
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
        user: this.paramData
      }
    };
    this.router.navigate(['ballot-complete'], naviExtras);
  }

  goBack() {
    this.router.navigate(['ballot']);
  }
}

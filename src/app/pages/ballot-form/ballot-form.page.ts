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

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
    if (lastName.includes('A', 0)) {
      this.precinct = 'Your Ballot is for Precinct #1';
    } else if(lastName.includes('B', 0)) {
      this.precinct = 'Your Ballot is for Precinct #2';
    } else if (lastName.includes('C', 0)) {
      this.precinct = 'Your Ballot is for Precinct #3';
    } else {
      this.precinct = 'Your Ballot is for Precinct #4';
    }
  }

  goToComplete() {
    const naviExtras: NavigationExtras = {
      state: { user: this.paramData }
    };
    this.router.navigate(['ballot-complete'], naviExtras);
  }

  goBack() {
    this.router.navigate(['ballot']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-prep-error',
  templateUrl: './ballot-prep-error.page.html',
  styleUrls: ['./ballot-prep-error.page.scss'],
})
export class BallotPrepErrorPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['ballotpreperror'];
    });
  }
  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
  backbtn() {
    this.route.navigate(['/access-code', {
      t: new Date().getTime()
    }]);
  }
}

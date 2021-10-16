import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-ready-prep-error',
  templateUrl: './ballot-ready-prep-error.page.html',
  styleUrls: ['./ballot-ready-prep-error.page.scss'],
})
export class BallotReadyPrepErrorPage implements OnInit {
  results: any;
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].ballotballotpreperror;
      });
  }
  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
  backbtn() {
    this.route.navigate(['/test-results']);
  }
}

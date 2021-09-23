import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-access-error13',
  templateUrl: './ballot-access-error13.page.html',
  styleUrls: ['./ballot-access-error13.page.scss'],
})
export class BallotAccessError13Page implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['calloutoforder_submit00013_error'];

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

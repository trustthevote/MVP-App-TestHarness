import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-test-failed',
  templateUrl: './ballot-test-failed.page.html',
  styleUrls: ['./ballot-test-failed.page.scss'],
})
export class BallotTestFailedPage implements OnInit {

  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['BallotTestFailedPage'];

    });
  }
  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-test-error',
  templateUrl: './ballot-test-error.page.html',
  styleUrls: ['./ballot-test-error.page.scss'],
})
export class BallotTestErrorPage implements OnInit {
  results: any;
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].calloutoforder_construct00006_error;
      });
  }
  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
  backbtn() {
    this.route.navigate([
      '/access-code',
      {
        t: new Date().getTime(),
      },
    ]);
  }
}

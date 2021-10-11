import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-test-failed-test',
  templateUrl: './ballot-test-failed-test.page.html',
  styleUrls: ['./ballot-test-failed-test.page.scss'],
})
export class BallotTestFailedTestPage implements OnInit {

  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['ballot_test_faild_test_page'];

    });
  }

  newballot() {
    this.route.navigate(['/tobecontinue']);
  }
  requestballot() {
    this.route.navigate(['/tobecontinue']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-test-fail-err',
  templateUrl: './ballot-test-fail-err.page.html',
  styleUrls: ['./ballot-test-fail-err.page.scss'],
})
export class BallotTestFailErrPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
     
      this.results = json[0]['calloutoforder_spoil00009_error'];
      
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

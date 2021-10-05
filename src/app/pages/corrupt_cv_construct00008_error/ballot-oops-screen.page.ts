import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-oops-screen',
  templateUrl: './ballot-oops-screen.page.html',
  styleUrls: ['./ballot-oops-screen.page.scss'],
})
export class BallotOopsScreenPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['corrupt_cv_construct00008_error'];

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

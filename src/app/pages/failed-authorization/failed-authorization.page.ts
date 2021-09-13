import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-failed-authorization',
  templateUrl: './failed-authorization.page.html',
  styleUrls: ['./failed-authorization.page.scss'],
})
export class FailedAuthorizationPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['failed_auth'];
    });
  }
  backbtn() {
    this.route.navigate(['/access-code', {
      t: new Date().getTime()
    }]);
  }
  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
}

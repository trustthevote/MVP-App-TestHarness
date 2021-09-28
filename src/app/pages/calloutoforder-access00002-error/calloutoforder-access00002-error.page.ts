import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calloutoforder-access00002-error',
  templateUrl: './calloutoforder-access00002-error.page.html',
  styleUrls: ['./calloutoforder-access00002-error.page.scss'],
})
export class CalloutoforderAccess00002ErrorPage implements OnInit {

  results = [];
  userObject: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['calloutoforder_access00002_error'];
    });
    if (this.userObject.lastname != undefined) {
      const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
      if (lastName == 'OOOOO') {
        console.log('00000 Error')
      }
    }
  }
  confirm() {
    this.route.navigate(['/request-access-code']);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }

}

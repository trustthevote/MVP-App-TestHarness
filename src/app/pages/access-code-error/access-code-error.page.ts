import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-code-error',
  templateUrl: './access-code-error.page.html',
  styleUrls: ['./access-code-error.page.scss'],
})
export class AccessCodeErrorPage implements OnInit {
  results = [];
  userObject: any;
  constructor(private route: Router) {}

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['access_code_error_page'];
    });
    if (this.userObject.lastname != undefined) {
      const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
      if (lastName == 'OOOOO') {
      console.log('00000 Error')
      } else{
        console.log('last name undefined Error')
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

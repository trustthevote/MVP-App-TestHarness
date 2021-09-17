import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-network',
  templateUrl: './check-network.page.html',
  styleUrls: ['./check-network.page.scss'],
})
export class CheckNetworkPage implements OnInit {
  results = [];
  userObject: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['check_network_page'];
    });
    if (this.userObject.lastname != undefined) {
      const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
      if (lastName == 'OOOO') {
      console.log('00001 Error')
      } else{
        console.log(' last name undefined Error')
      }
    }
  }
  confirm() {
    // this.route.navigate(['/access-code', {
    //   t: new Date().getTime()
    // }]);
    this.route.navigate(['/access-code']);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }

}

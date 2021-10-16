import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-error-access-ten',
  templateUrl: './network-error-access-ten.page.html',
  styleUrls: ['./network-error-access-ten.page.scss'],
})
export class NetworkErrorAccessTenPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0]['check_network_spoil00010_error'];
      });
  }
  confirm() {
    this.route.navigate([
      '/access-code',
      {
        t: new Date().getTime(),
      },
    ]);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-network-access00005-error',
  templateUrl: './check-network-access00005-error.page.html',
  styleUrls: ['./check-network-access00005-error.page.scss'],
})
export class CheckNetworkAccess00005ErrorPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0]['check_network_access00005_error'];
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

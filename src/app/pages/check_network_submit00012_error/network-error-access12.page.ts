import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-error-access12',
  templateUrl: './network-error-access12.page.html',
  styleUrls: ['./network-error-access12.page.scss'],
})
export class NetworkErrorAccess12Page implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0]['check_network_submit00012_error'];
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

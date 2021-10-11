import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-network-oooo-error',
  templateUrl: './check-network-oooo-error.page.html',
  styleUrls: ['./check-network-oooo-error.page.scss'],
})
export class CheckNetworkOOOOErrorPage implements OnInit {

  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['check_network_oooo_error_page'];
    });
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

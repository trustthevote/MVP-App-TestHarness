import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-network',
  templateUrl: './check-network.page.html',
  styleUrls: ['./check-network.page.scss'],
})
export class CheckNetworkPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['check_network_page'];
    });
  }
  confirm() {
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-error-request-code',
  templateUrl: './network-error-request-code.page.html',
  styleUrls: ['./network-error-request-code.page.scss'],
})
export class NetworkErrorRequestCodePage implements OnInit {
  results: any;
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].network_error_request_code_page;
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

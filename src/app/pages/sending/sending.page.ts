import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sending',
  templateUrl: './sending.page.html',
  styleUrls: ['./sending.page.scss'],
})
export class SendingPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['sending_page'];
    });
  }
  confirm() {
    this.route.navigate(['/check']);
  }

  backbtn() {
    this.route.navigate(['/ballot-fingerprint']);
  }
}

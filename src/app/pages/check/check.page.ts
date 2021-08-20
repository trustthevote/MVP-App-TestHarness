import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      // console.log("json", json);
      this.results = json[0]['check_page'];
      // console.log("results: ", this.results); 
    });
  }
  confirm() {
    this.route.navigate(['/sending-confirmation']);
  }
  failsbtn() {
    this.route.navigate(['/check-network']);
  }
  fail2btn() {
    this.route.navigate(['/check-servers']);
  }
}

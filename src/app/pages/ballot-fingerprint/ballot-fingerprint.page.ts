import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ballot-fingerprint',
  templateUrl: './ballot-fingerprint.page.html',
  styleUrls: ['./ballot-fingerprint.page.scss'],
})
export class BallotFingerprintPage implements OnInit {
  results = [];

  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      // console.log("json", json);
      this.results = json[0]['ballot_fingerp'];
      console.log("results: ", this.results);
    });
  }
  copybtn() {
    this.route.navigate(['/copy-confirmed']);
  }
  sendbtn() {
    this.route.navigate(['/sending']);
  }
}

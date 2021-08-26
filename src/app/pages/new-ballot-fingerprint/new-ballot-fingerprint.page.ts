import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-ballot-fingerprint',
  templateUrl: './new-ballot-fingerprint.page.html',
  styleUrls: ['./new-ballot-fingerprint.page.scss'],
})
export class NewBallotFingerprintPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['new_ballot_finger_print'];
    });
  }
  sendbtn() {
    this.route.navigate(['/sending']);
  }
  copybtn() {
    this.route.navigate(['/copy-confirmed']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ballot-fingerprint',
  templateUrl: './ballot-fingerprint.page.html',
  styleUrls: ['./ballot-fingerprint.page.scss'],
})
export class BallotFingerprintPage implements OnInit {
  results = [];
  IsVisible: boolean = false;
  Ishowmore: boolean = false;
  Ishowmoredetails: boolean = false;
  icon: boolean = true;
  scndicons = false;
  fsticon = true;
  constructor(private route: Router) { }

  PolicyDetails() {
    this.IsVisible = true;
    this.fsticon = false
    this.scndicons = true;
  }
  PolicyDetailshide() {
    this.IsVisible = false;
    this.scndicons = false;
    this.fsticon = true
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['ballot_fingerp'];
      console.log("results: ", this.results);
    });
  }
  copybtn() {
    this.route.navigate(['/test-results']);
  }
  sendbtn() {
    this.route.navigate(['/sending']);
  }
}

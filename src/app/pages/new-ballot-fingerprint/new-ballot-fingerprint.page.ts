import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-ballot-fingerprint',
  templateUrl: './new-ballot-fingerprint.page.html',
  styleUrls: ['./new-ballot-fingerprint.page.scss'],
})
export class NewBallotFingerprintPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  sendbtn(){
    this.route.navigate(['/sending']);
  }
  copybtn(){
    this.route.navigate(['/copy-confirmed']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ballot-fingerprint',
  templateUrl: './ballot-fingerprint.page.html',
  styleUrls: ['./ballot-fingerprint.page.scss'],
})
export class BallotFingerprintPage implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
  }
 copybtn(){
   this.route.navigate(['/copy-confirmed']);
 }
 sendbtn(){
   this.route.navigate(['/sending']);
 }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copy-confirmed',
  templateUrl: './copy-confirmed.page.html',
  styleUrls: ['./copy-confirmed.page.scss'],
})
export class CopyConfirmedPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  nextbtn(){
    this.route.navigate(['/test-results']);
  }
  backbtn(){
    this.route.navigate(['/ballot-fingerprint']);
  }

}

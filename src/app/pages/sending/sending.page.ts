import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sending',
  templateUrl: './sending.page.html',
  styleUrls: ['./sending.page.scss'],
})
export class SendingPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['/check']);
  }

  backbtn(){
    this.route.navigate(['/ballot-fingerprint']);
  }
}

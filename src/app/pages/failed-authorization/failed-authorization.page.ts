import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-failed-authorization',
  templateUrl: './failed-authorization.page.html',
  styleUrls: ['./failed-authorization.page.scss'],
})
export class FailedAuthorizationPage implements OnInit {

  constructor(private route: Router) { }


  ngOnInit() {
  }
  backbtn(){
    this.route.navigate(['/ballot-complete'])
  }
  printbtn(){
    this.route.navigate(['/print-return-digital']);
  }
}

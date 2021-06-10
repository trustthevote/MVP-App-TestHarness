import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.page.html',
  styleUrls: ['./print.page.scss'],
})
export class PrintPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRetry() {
    this.router.navigate(['ballot-complete']);
  }


  goToBallot() {
    this.router.navigate(['ballot']);
  }

}

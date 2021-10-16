import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.page.html',
  styleUrls: ['./print.page.scss'],
})
export class PrintPage implements OnInit {
  results: any;
  constructor(private router: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].printing_page;
      });
  }

  goToRetry() {
    this.router.navigate(['ballot-complete']);
  }

  goToBallot() {
    this.router.navigate(['ballot']);
  }
}

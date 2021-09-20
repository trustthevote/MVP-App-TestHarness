import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ballot-resealed',
  templateUrl: './ballot-resealed.page.html',
  styleUrls: ['./ballot-resealed.page.scss'],
})
export class BallotResealedPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    this.results = json[0]['ballot_resealed_page'];
    });
  }
  nextbtn() {
    this.route.navigate(['/ballot-ready-two']);
  }

 

}

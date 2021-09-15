import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-howditgo',
  templateUrl: './howditgo.page.html',
  styleUrls: ['./howditgo.page.scss'],
})
export class HowditgoPage implements OnInit {
  results = [];
  constructor(private route: Router) { }


  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['howitdo_page'];
    });
  }

  Continuebtn() {
    this.route.navigate(['/intro']);
  }
  backbtn() {
    this.route.navigate(['/ballot-fingerprint']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howditgo',
  templateUrl: './howditgo.page.html',
  styleUrls: ['./howditgo.page.scss'],
})
export class HowditgoPage implements OnInit {
  results = [];
  constructor() { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['howitdo_page']; 
    });
  }

}

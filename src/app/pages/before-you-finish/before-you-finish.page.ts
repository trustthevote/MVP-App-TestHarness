import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-you-finish',
  templateUrl: './before-you-finish.page.html',
  styleUrls: ['./before-you-finish.page.scss'],
})
export class BeforeYouFinishPage implements OnInit {

  results = [];

  constructor(private route: Router,
 ) {}


  ngOnInit() {
   
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['beforeyoufinish_page']; 
    });
  }
  nextbtn(){
    this.route.navigate(['/ballot-fingerprint']);
  }

}

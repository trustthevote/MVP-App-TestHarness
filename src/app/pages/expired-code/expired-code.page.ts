import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-code',
  templateUrl: './expired-code.page.html',
  styleUrls: ['./expired-code.page.scss'],
})
export class ExpiredCodePage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    
      this.results = json[0]['ExpiredCodePage'];
     
    });
  }
  backbtn(){
    this.route.navigate(['/access-code',{
      t: new Date().getTime()
    }]);
  }
  printbtn() {
    this.route.navigate(['/print-return-digital']);
  }

}

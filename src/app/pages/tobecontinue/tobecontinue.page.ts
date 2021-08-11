
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tobecontinue',
  templateUrl: './tobecontinue.page.html',
  styleUrls: ['./tobecontinue.page.scss'],
})
export class TobecontinuePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  reloadCurrentPage(){
    this.route.navigate(['/intro']);
  }
  backbtn(){

    this.route.navigate(['/print-return']);
  }

}

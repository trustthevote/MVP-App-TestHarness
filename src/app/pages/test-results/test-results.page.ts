import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.page.html',
  styleUrls: ['./test-results.page.scss'],
})
export class TestResultsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 nextbtn(){
   this.route.navigate(['/new-ballot-fingerprint']);
 }
 passbtn(){
   this.route.navigate(['/copy-confirmed']);
 }

}

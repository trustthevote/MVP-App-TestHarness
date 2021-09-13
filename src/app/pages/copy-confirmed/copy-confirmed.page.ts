import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copy-confirmed',
  templateUrl: './copy-confirmed.page.html',
  styleUrls: ['./copy-confirmed.page.scss'],
})
export class CopyConfirmedPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {

      this.results = json[0]['copy_confirm'];

    });
  }
  nextbtn() {
    this.route.navigate(['/test-results']);
  }
  backbtn() {
    this.route.navigate(['/ballot-fingerprint']);
  }

}

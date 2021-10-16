import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user-time-out',
  templateUrl: './user-time-out.page.html',
  styleUrls: ['./user-time-out.page.scss'],
})
export class UserTimeOutPage implements OnInit {
  results = [];
  constructor(private router: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0]['user_time_out_page'];
      });
  }
  backbtn() {
    this.router.navigate(['/ballot']);
  }
}

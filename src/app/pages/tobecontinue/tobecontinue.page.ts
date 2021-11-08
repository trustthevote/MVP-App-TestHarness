import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/class/user/user.service';

@Component({
  selector: 'app-tobecontinue',
  templateUrl: './tobecontinue.page.html',
  styleUrls: ['./tobecontinue.page.scss'],
})
export class TobecontinuePage implements OnInit {
  results = [];

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].tobe_continue_page;
      });
  }

  reloadCurrentPage() {
    this.userService.resetUser();
    this.route.navigate(['/intro']);
  }

  backbtn() {
    this.route.navigate(['/ballot-complete']);
  }
}

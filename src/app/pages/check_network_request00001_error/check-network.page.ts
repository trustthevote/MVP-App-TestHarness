import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/class/user/user.service';

@Component({
  selector: 'app-check-network',
  templateUrl: './check-network.page.html',
  styleUrls: ['./check-network.page.scss'],
})
export class CheckNetworkPage implements OnInit {
  results = [];

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].check_network_request00001_error;
      });

    const lastName = this.userService.getUser().lastName;
    if (lastName !== undefined) {
      const modifiedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      if (modifiedLastName === 'OOOO') {
        // todo: this conditional is empty - what was the intent here?
      }
    }
  }
  confirm() {
    this.route.navigate(['/request-access-code']);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }

  printbtn() {
    this.route.navigate(['/print-return']);
  }
}

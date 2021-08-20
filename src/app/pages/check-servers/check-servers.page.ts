import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-servers',
  templateUrl: './check-servers.page.html',
  styleUrls: ['./check-servers.page.scss'],
})
export class CheckServersPage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    
      this.results = json[0]['check_server_page'];

    });
  }
  confirm() {
    this.route.navigate(['/check']);
  }

}

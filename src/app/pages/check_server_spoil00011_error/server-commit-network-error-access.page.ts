import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-commit-network-error-access',
  templateUrl: './server-commit-network-error-access.page.html',
  styleUrls: ['./server-commit-network-error-access.page.scss'],
})
export class ServerCommitNetworkErrorAccessPage implements OnInit {
  results = [];
  constructor(private route: Router) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['check_server_spoil00011_error'];
    });
  }
  
  tryBtn() {
    this.route.navigate(['/access-code']);
  }
  nextprint(){
    this.route.navigate(['/print-return']);
  }
  reportbtn(){
    this.route.navigate(['/tobecontinue']);
  }
}

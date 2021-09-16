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
      this.results = json[0]['server_commit_network_error_access_page'];
    });
  }
  tryBtn() {
    this.route.navigate(['/access-code']);
  }
}

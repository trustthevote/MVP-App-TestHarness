import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-network',
  templateUrl: './check-network.page.html',
  styleUrls: ['./check-network.page.scss'],
})
export class CheckNetworkPage implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['/check']);
  }

}

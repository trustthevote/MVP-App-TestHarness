import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-servers',
  templateUrl: './check-servers.page.html',
  styleUrls: ['./check-servers.page.scss'],
})
export class CheckServersPage implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['/check']);
  }

}

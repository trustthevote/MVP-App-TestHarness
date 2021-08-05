import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  confirm(){
    this.route.navigate(['/sending-confirmation']);
  }
  failsbtn(){
    this.route.navigate(['/check-network']);
  }
  fail2btn(){
    this.route.navigate(['/check-servers']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-user-time-out',
  templateUrl: './user-time-out.page.html',
  styleUrls: ['./user-time-out.page.scss'],
})
export class UserTimeOutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backbtn(){
    this.router.navigate(['/ballot']);
  }

}

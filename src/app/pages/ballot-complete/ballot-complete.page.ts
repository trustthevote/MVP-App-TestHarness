import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ballot-complete',
  templateUrl: './ballot-complete.page.html',
  styleUrls: ['./ballot-complete.page.scss'],
})
export class BallotCompletePage implements OnInit {
  paramData: any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
  }

  async goToPrint() {
    this.router.navigate(['print']);
  }

  goToBallot() {
    this.router.navigate(['ballot']);
  }
}

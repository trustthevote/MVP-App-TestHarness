import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-ballot-complete',
  templateUrl: './ballot-complete.page.html',
  styleUrls: ['./ballot-complete.page.scss'],
})
export class BallotCompletePage {
  paramData: any;
  // localPdf = 'assets/files/bedrock_precinct2/jetsons_bedrock-precinct2_ballot_marked.pdf';
  // localPdf2 = 'assets/files/bedrock_precinct2/precinct2_voter_affidavit.pdf';

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  goToFinish() {
    this.router.navigate(['print']);
  }

  async openPDF() {
    await Browser.open({ url: 'https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing' });
  }

  async openPDF2() {
    await Browser.open({ url: 'https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing' });
  }

  // async goToPrint() {
  //   await this.router.navigate(['print']);
  // }
}

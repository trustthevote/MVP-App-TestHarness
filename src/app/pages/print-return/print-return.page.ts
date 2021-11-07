import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';

@Component({
  selector: 'app-print-return',
  templateUrl: './print-return.page.html',
  styleUrls: ['./print-return.page.scss'],
})
export class PrintReturnPage implements OnInit {
  paramData: any;
  precinct: any;

  precinctNum: number;
  results = [];
  userObject: any;

  constructor(private router: Router, private voterartifactsService: VoterartifactsService, private localStorageRef: LocalStorageRef) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    this.userObject = JSON.parse(this.localStorageRef.getLocalStorage().getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].print_return_page;
      });
    if (this.userObject.lastName !== undefined) {
      const lastName = this.userObject.lastName.charAt(0).toUpperCase() + this.userObject.lastName.slice(1);
      if (lastName.includes('A', 0)) {
        this.precinctNum = 1;
      } else if (lastName.includes('B', 0)) {
        this.precinctNum = 2;
      } else if (lastName.includes('C', 0)) {
        this.precinctNum = 3;
      } else {
        this.precinctNum = 4;
      }
    }
  }

  goToFinish() {
    this.router.navigate(['tobecontinue']);
  }

  async openPDF(precinctNum) {
    if (precinctNum === 1) {
      console.log(precinctNum);
      await Browser.open({
        url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing ',
      });
    } else if (precinctNum === 2) {
      console.log(precinctNum);
      await Browser.open({
        url: 'https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing  ',
      });
    } else if (precinctNum === 3) {
      console.log(precinctNum);
      await Browser.open({
        url: 'https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing ',
      });
    } else {
      console.log(precinctNum);
      await Browser.open({
        url: 'https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing',
      });
    }
  }
  async openPDF2(precinctNum) {
    if (precinctNum === 1) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing',
      });
    } else if (precinctNum === 2) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing',
      });
    } else if (precinctNum === 3) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing',
      });
    } else {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing',
      });
    }
  }

  backbtn() {
    this.router.navigate(['/ballot-complete']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

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
  // P1 ballot - https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing
  // P1 aff - https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing

  // P2 ballot - https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing
  // P2 aff - https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing

  // P3 ballot - https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing
  // P3 aff - https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing

  // P4 ballot - https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing
  // P4 aff - https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));

    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['print_return_page'];
    });
    if (this.userObject.lastname != undefined) {
      // const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
      const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
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
      // await Browser.open({ url: 'https://drive.google.com/file/d/1Wrk9xhJkMFVEqtBBJgw2qZOTS9nqFxwk/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing '
      });
    } else if (precinctNum === 2) {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing  '
      });
    } else if (precinctNum === 3) {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing '
      });
    } else {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing'
      });
    }
  }

  async openPDF2(precinctNum) {
    if (precinctNum === 1) {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/1kn2xt5WxYzTn-NsbPc1X3BMqI47rjHDP/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing'
      });
    } else if (precinctNum === 2) {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/1BSmmTchFQ3X8MD4wEmsIStA2hV97nRS1/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing'
      });
    } else if (precinctNum === 3) {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/1oB_xaVUPwK6oE_9Np_iTymAU-lV2urJT/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing'
      });
    } else {
      console.log(precinctNum);
      // await Browser.open({ url: 'https://drive.google.com/file/d/160p-8lKOlIWXffnXZGR3Pf1gXf6mQYQW/view?usp=sharing' });
      await Browser.open({
        // url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing'
        url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing'
      });
    }
  }

  async openXML(precinctNum) {
    if (precinctNum === 1) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1pIe31DRlAtmcdsTeCc1HrAHKQ82N6wYL/view?usp=sharing'
      });
    } else if (precinctNum === 2) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1WUl5lTFPDYB8FJYdxq5FKhJGPaQgyy1Y/view?usp=sharing'
      });
    } else if (precinctNum === 3) {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1A_NWcXXqOLzr8OHnzmEEnCNcrYyBiViz/view?usp=sharing'
      });
    } else {
      await Browser.open({
        url: 'https://drive.google.com/file/d/1FBLU2ZGeVOO71zwqnPiWtOH_ibgCosId/view?usp=sharing'
      });
    }
  }
  backbtn(){
    this.router.navigate(['/ballot-complete']);
  }

    // P1 ballot - https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing 
    // P1 aff - https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing
    // P2 ballot - https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing  
    // P2 aff - https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing
    // P3 ballot - https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing 
    // P3 aff - https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing
    // P4 ballot - https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing
    // P4 aff - https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing
}

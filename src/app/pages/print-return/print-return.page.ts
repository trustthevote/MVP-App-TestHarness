import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

import { UserService } from 'src/app/class/user/user.service';

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

  constructor(private router: Router, private userService: UserService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.paramData = this.router.getCurrentNavigation().extras.state.user;
    }
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].print_return_page;
      });

    const lastName = this.userService.getUser().lastName;
    if (lastName !== undefined) {
      const modifiedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      if (modifiedLastName.includes('A', 0)) {
        this.precinctNum = 1;
      } else if (modifiedLastName.includes('B', 0)) {
        this.precinctNum = 2;
      } else if (modifiedLastName.includes('C', 0)) {
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-return-next-steps',
  templateUrl: './digital-return-next-steps.page.html',
  styleUrls: ['./digital-return-next-steps.page.scss'],
})
export class DigitalReturnNextStepsPage implements OnInit {
  results = [];
  constructor(private router: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    
      this.results = json[0]['digital_return_next_step_page'];
     
    });
  }

  goToFinish() {
    this.router.navigate(['tobecontinue']);
  }

}

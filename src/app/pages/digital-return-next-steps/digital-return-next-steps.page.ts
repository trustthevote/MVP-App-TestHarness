import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-return-next-steps',
  templateUrl: './digital-return-next-steps.page.html',
  styleUrls: ['./digital-return-next-steps.page.scss'],
})
export class DigitalReturnNextStepsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToFinish() {
    this.router.navigate(['tobecontinue']);
  }

}

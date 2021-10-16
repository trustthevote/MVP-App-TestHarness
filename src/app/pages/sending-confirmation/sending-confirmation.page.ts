import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sending-confirmation',
  templateUrl: './sending-confirmation.page.html',
  styleUrls: ['./sending-confirmation.page.scss'],
})
export class SendingConfirmationPage implements OnInit {
  results: any;
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].sending_confirmation_page;
      });
  }
  continuebtn() {
    this.route.navigate(['/howditgo']);
  }
}

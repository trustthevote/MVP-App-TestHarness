import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sending-confirmation',
  templateUrl: './sending-confirmation.page.html',
  styleUrls: ['./sending-confirmation.page.scss'],
})
export class SendingConfirmationPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  Continuebtn(){
     this.route.navigate(['/digital-return-next-steps'])
  }
}

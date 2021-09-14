import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { AvclientService } from 'src/app/api/avclient.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-request-access-code',
  templateUrl: './request-access-code.page.html',
  styleUrls: ['./request-access-code.page.scss'],
})
export class RequestAccessCodePage implements OnInit {

  results = [];
  userObject: any;
  constructor(private route: Router,
    public statuscodeService: StatuscodeService,
    public avclientService: AvclientService) {}


  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['rap_page']; 
    });
  }
  Continuebtn(){
    this.avclientService.assignServerUrl(environment.url);
    if (this.userObject.lastname != undefined) {
      let opaqueVoterId = this.userObject.lastname
      if (opaqueVoterId == 'OOOOO') {
          opaqueVoterId = 'T0000';
      }
      else if(opaqueVoterId == 'OOOO') {
              opaqueVoterId = 'T0001';
      }
      console.log("opaqueVoterId", opaqueVoterId);
      this.avclientService.requestAccessCode(opaqueVoterId);
    }
  }
}

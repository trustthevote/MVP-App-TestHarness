import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { AvclientService } from 'src/app/api/avclient.service';
import { environment } from 'src/environments/environment';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';

@Component({
  selector: 'app-request-access-code',
  templateUrl: './request-access-code.page.html',
  styleUrls: ['./request-access-code.page.scss'],
})
export class RequestAccessCodePage implements OnInit {
  results = [];
  userObject: any;

  constructor(
    private route: Router,
    public statuscodeService: StatuscodeService,
    public avclientService: AvclientService,
    private voterartifactsService: VoterartifactsService
  ) {
    this.avclientService.initServerURL(environment.url);
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    this.voterartifactsService.initialize(this.userObject.lastname);
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].rap_page;
      });
  }
  async continuebtn() {
    if (this.userObject.lastname !== undefined) {
      const opaqueVoterId = this.userObject.lastname;
      await this.avclientService
        .requestAccessCode(opaqueVoterId)
        .then(() => {
          this.route.navigate([
            '/access-code',
            {
              t: new Date().getTime(),
            },
          ]);
        })
        .catch((res) => {
          if (res.message === 'voter record not found') {
            this.route.navigate(['/voter_record_notfound00000_error']);
          } else if (res.message === 'network code') {
            this.route.navigate(['/check_network_request00001_error']);
          }
        });
    }
  }
  backbtn() {
    this.route.navigate(['/ballot-complete']);
  }
}

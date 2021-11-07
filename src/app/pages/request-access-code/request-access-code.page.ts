import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StatuscodeService } from 'src/app/api/statuscode.service';
import { AvclientService } from 'src/app/api/avclient.service';
import { environment } from 'src/environments/environment';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';

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
    private localStorageRef: LocalStorageRef,
    public statuscodeService: StatuscodeService,
    public avclientService: AvclientService,
    private voterartifactsService: VoterartifactsService
  ) {
    // there's a bug here where voterartifactsService.initialize will be called twice:
    // - once indirectly by the avclientService.initServerURL method
    // - again directly in this constructor
    // todo: determine the appropriate time for calling that method, and resolve the duplicate calls to a single one
    this.avclientService.initServerURL(environment.url);
    this.avclientService.initialize();
    this.userObject = JSON.parse(this.localStorageRef.getLocalStorage().getItem('userNameInfo'));
    this.voterartifactsService.initialize(this.userObject.lastName);
  }

  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].rap_page;
      });
  }

  async continuebtn() {
    if (this.userObject.lastName !== undefined) {
      const opaqueVoterId = this.userObject.lastName;
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

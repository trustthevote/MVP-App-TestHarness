import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';

@Component({
  selector: 'app-ballot-fingerprint',
  templateUrl: './ballot-fingerprint.page.html',
  styleUrls: ['./ballot-fingerprint.page.scss'],
})
export class BallotFingerprintPage implements OnInit {
  results = [];
  IsVisible: boolean = false;
  Ishowmore: boolean = false;
  Ishowmoredetails: boolean = false;
  icon: boolean = true;
  scndicons = false;
  fsticon = true;
  getCode: any;
  affidavit: any;
  userObject: any;
  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,
    public voterartifactsService: VoterartifactsService) { 
      this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    }

  PolicyDetails() {
    this.IsVisible = true;
    this.fsticon = false
    this.scndicons = true;
  }
  PolicyDetailshide() {
    this.IsVisible = false;
    this.scndicons = false;
    this.fsticon = true
  }

  ngOnInit() {
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['ballot_fingerp'];
    });
  }
  sendbtn() {
    this.affidavit = this.voterartifactsService.affidavit
    this.avclientService.submitBallotCryptograms(this.affidavit).then(res => {
      this.route.navigate(['/sending-confirmation', {
        code: this.getCode
      }]);
    }).catch(res => {     
      if (res == 'Error: network code') {
        this.route.navigate(['/check_network_submit00012_error']);
      } else if (res == 'Error: call out of order error') {
        this.route.navigate(['/calloutoforder_submit00013_error']);
      }
    });
  }
  copybtn() {
    this.avclientService.spoilBallotCryptograms().then(res => {
      this.route.navigate(['/test-results', {
        code: this.getCode
      }]);
    }).catch(res => {
      if (res == 'Error: call out of order error') {
        this.route.navigate(['/calloutoforder_spoil00009_error']);
      } else if (res == 'Error: network code') {
        this.route.navigate(['/check_network_spoil00010_error']);
      } else if (res == 'Error: server commitment error') {
        this.route.navigate(['/check_server_spoil00011_error']);
      }
    });
  }
}

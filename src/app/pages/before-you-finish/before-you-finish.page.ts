import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';



@Component({
  selector: 'app-before-you-finish',
  templateUrl: './before-you-finish.page.html',
  styleUrls: ['./before-you-finish.page.scss'],
})
export class BeforeYouFinishPage implements OnInit {
  results = [];
  getCode: any;
  cvr: any;
  userObject: any;
  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    public avclientService: AvclientService,
    public voterartifactsService: VoterartifactsService
  ) { 
  }


  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['beforeyoufinish_page'];
    });
  }
  nextbtn() {
    this.cvr = this.voterartifactsService.cvr
    this.avclientService.constructBallotCryptograms().then(res => {
      this.route.navigate(['/ballot-fingerprint', {
        code: this.getCode
      }]);
    }).catch(res => {
      if (res == 'Error: call out of order error') {
        this.route.navigate(['/calloutoforder_construct00006_error']);
      } else if (res == 'Error: network code') {
        this.route.navigate(['/check_network_construct00007_error']);
      } else if (res == 'Error: corrupt CVR') {
        this.route.navigate(['/corrupt_cv_construct00008_error']);
      }
    });
  }

}

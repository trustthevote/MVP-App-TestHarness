import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.page.html',
  styleUrls: ['./test-results.page.scss'],
})
export class TestResultsPage implements OnInit {
  results = [];
  getCode: any;
  cvr: any;
  userObject: any;
  constructor(
    private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,
    public voterartifactsService: VoterartifactsService
  ) {}

  ngOnInit() {
    this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].test_result_page;
      });
  }
  passbtn() {
    this.cvr = this.voterartifactsService.cvr;
    this.avclientService
      .constructBallotCryptograms(this.cvr)
      .then(() => {
        this.route.navigate([
          '/ballot-resealed',
          {
            code: this.getCode,
          },
        ]);
      })
      .catch((res) => {
        if (res.message === 'call out of order error') {
          this.route.navigate(['/calloutoforder_construct00006_error']);
        } else if (res.message === 'network code') {
          this.route.navigate(['/check_network_construct00007_error']);
        } else if (res.message === 'corrupt CVR') {
          this.route.navigate(['/corrupt_cv_construct00008_error']);
        }
      });
  }

  failbtn() {
    this.route.navigate(['/ballot-test-failed-test']);
  }
  backbtn() {
    this.route.navigate([
      '/ballot-fingerprint',
      {
        code: this.getCode,
      },
    ]);
  }
}

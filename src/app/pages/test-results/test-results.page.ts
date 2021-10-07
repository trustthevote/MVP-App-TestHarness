import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
import { VoterartifactsService } from 'src/app/api/voterartifacts.service';
import { environment } from 'src/environments/environment';
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
  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,
    public voterartifactsService: VoterartifactsService) { 
      this.avclientService.assignServerUrl(environment.url);
      this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
      let getVoterArt = this.voterartifactsService.Initialize(this.userObject.lastname);
    }

  ngOnInit() {
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['test_result_page'];
    });
  }
  passbtn() {
    this.cvr = this.voterartifactsService.cvr
    this.avclientService.constructBallotCryptograms(this.cvr).catch(res => {
    });
    this.route.navigate(['/ballot-fingerprint', {
      code: this.getCode
    }]);
  }

  failbtn() {
    this.route.navigate(['/ballot-test-failed-test']);
  }

}

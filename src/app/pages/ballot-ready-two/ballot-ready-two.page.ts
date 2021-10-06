import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
@Component({
  selector: 'app-ballot-ready-two',
  templateUrl: './ballot-ready-two.page.html',
  styleUrls: ['./ballot-ready-two.page.scss'],
})
export class BallotReadyTwoPage implements OnInit {

  results = [];
  getCode: any;

  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['ballot_fingerp'];
    });
  }
  copybtn() {
    this.avclientService.spoilBallotCryptograms(this.getCode).catch(res => {
    });
    if (this.getCode == '00009') {
      this.route.navigate(['/ballot-test-fail-err']);
    } else if (this.getCode == '00010') {
      this.route.navigate(['/network-error-access-ten']);
    } else if (this.getCode == '00011') {
      this.route.navigate(['/server-commit-network-error-access']);
    }
    else{
    this.route.navigate(['/access-code-error']);
  }
  }
  
  sendbtn() {
    this.route.navigate(['/sending']);
  }
}
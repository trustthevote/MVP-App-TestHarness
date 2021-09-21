import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
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
  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,) { }

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
    this.avclientService.submitBallotCryptograms(this.getCode).catch(res => {
      console.log("res", res);
    });
   if (this.getCode == '00012') {
      this.route.navigate(['/network-error-access12']);
    } else if (this.getCode == '00013') {
      this.route.navigate(['/ballot-access-error13']);
    }
    else{
      this.route.navigate(['/sending-confirmation']);
    }
  }
  copybtn() {
    this.avclientService.spoilBallotCryptograms(this.getCode).catch(res => {
      console.log("res", res);
    });
    if (this.getCode == '00009') {
      this.route.navigate(['/ballot-test-fail-err']);
    } else if (this.getCode == '00010') {
      this.route.navigate(['/network-error-access-ten']);
    } else if (this.getCode == '00011') {
      this.route.navigate(['/server-commit-network-error-access']);
    }
    else{
    this.route.navigate(['/test-results']);
  }
  }
}

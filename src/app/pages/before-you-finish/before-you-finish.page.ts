import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';


@Component({
  selector: 'app-before-you-finish',
  templateUrl: './before-you-finish.page.html',
  styleUrls: ['./before-you-finish.page.scss'],
})
export class BeforeYouFinishPage implements OnInit {
results = [];
getCode: any;
constructor(private route: Router,
  private activatedRoute: ActivatedRoute,
  public avclientService: AvclientService
) {}


ngOnInit() {
  this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
  fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    this.results = json[0]['beforeyoufinish_page'];
  });
}
nextbtn() {
  if (this.getCode != null) {
    this.avclientService.constructBallotCryptograms(this.getCode).catch(res => {
      console.log("res", res);
    });
  }
  if (this.getCode == '00006') {
    this.route.navigate(['/calloutoforder_construct00006_error']);
  } else if (this.getCode == '00007') {
    this.route.navigate(['/check_network_construct00007_error']);
  } else if (this.getCode == '00008') {
    this.route.navigate(['/corrupt_cv_construct00008_error']);
  } else {
    this.route.navigate(['/ballot-fingerprint', {
      code: this.getCode
    }]);
  }
}

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ballot-resealed',
  templateUrl: './ballot-resealed.page.html',
  styleUrls: ['./ballot-resealed.page.scss'],
})
export class BallotResealedPage implements OnInit {
  results = [];
  getCode: any;
  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,) {
      this.avclientService.assignServerUrl(environment.url);
     }

  ngOnInit() {
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['ballot_resealed_page'];
    });
  }
  nextbtn() {
    this.route.navigate(['/ballot-fingerprint', {
      code: this.getCode
    }]);
  }



}

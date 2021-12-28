import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DrClientService } from 'src/app/api/drclient.service';

@Component({
  selector: 'app-ballot-resealed',
  templateUrl: './ballot-resealed.page.html',
  styleUrls: ['./ballot-resealed.page.scss'],
})
export class BallotResealedPage implements OnInit {
  results = [];
  getCode: any;
  constructor(private route: Router, public drClientService: DrClientService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].ballot_resealed_page;
      });
  }
  nextbtn() {
    this.route.navigate([
      '/ballot-fingerprint',
      {
        code: this.getCode,
      },
    ]);
  }
}

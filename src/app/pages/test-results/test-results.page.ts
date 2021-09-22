import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvclientService } from 'src/app/api/avclient.service';
@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.page.html',
  styleUrls: ['./test-results.page.scss'],
})
export class TestResultsPage implements OnInit {
  results = [];
  getCode: any;
  constructor(private route: Router,
    public avclientService: AvclientService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
    this.results = json[0]['test_result_page'];
    });
  }
  passbtn() {
    this.route.navigate(['/ballot-resealed', {
      code: this.getCode
    }]);
  }

  failbtn() {
    this.route.navigate(['/ballot-test-failed-test']);
  }

}

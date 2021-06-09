import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  styleUrls: ['./intro.page.scss'],
  template: `<ion-content scroll-y="false">
                <ion-slides pager="true" [options]="slideOpts">
                  <ion-slide>
                    <img src="../../../assets/images/slides/slide-1.jpg">
                  </ion-slide>
                  <ion-slide (click)="next(1)">
                    <img src="../../../assets/images/slides/slide-2.jpg">
                  </ion-slide>
                </ion-slides>
              </ion-content>`
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true
    },
    pagination: false
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  next(slideIndex: number) {
    console.log('slideIndex', slideIndex);
    if (slideIndex === 1) {
      this.router.navigate(['/ballot']);
    }
  }
}

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { BallotReadyPrepErrorPage } from './ballot-ready-prep-error.page';

describe('BallotReadyPrepErrorPage', () => {
  let component: BallotReadyPrepErrorPage;
  let fixture: ComponentFixture<BallotReadyPrepErrorPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotReadyPrepErrorPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(BallotReadyPrepErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { BallotTestFailErrPage } from './ballot-test-fail-err.page';

describe('BallotTestFailErrPage', () => {
  let component: BallotTestFailErrPage;
  let fixture: ComponentFixture<BallotTestFailErrPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotTestFailErrPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotTestFailErrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

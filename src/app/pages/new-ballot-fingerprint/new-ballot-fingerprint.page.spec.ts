import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { NewBallotFingerprintPage } from './new-ballot-fingerprint.page';

describe('NewBallotFingerprintPage', () => {
  let component: NewBallotFingerprintPage;
  let fixture: ComponentFixture<NewBallotFingerprintPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NewBallotFingerprintPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(NewBallotFingerprintPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

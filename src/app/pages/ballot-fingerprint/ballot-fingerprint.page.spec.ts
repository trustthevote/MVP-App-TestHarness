import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { BallotFingerprintPage } from './ballot-fingerprint.page';

describe('BallotFingerprintPage', () => {
  let component: BallotFingerprintPage;
  let fixture: ComponentFixture<BallotFingerprintPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotFingerprintPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(BallotFingerprintPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { BallotCompletePage } from './ballot-complete.page';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          user: 'foo',
        },
      },
    };
  }
}

describe('BallotCompletePage', () => {
  let component: BallotCompletePage;
  let fixture: ComponentFixture<BallotCompletePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotCompletePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: UserService, useClass: UserServiceStub },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(BallotCompletePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

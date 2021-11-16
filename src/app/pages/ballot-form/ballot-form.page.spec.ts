import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { BallotFormPage } from './ballot-form.page';

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

describe('BallotFormPage', () => {
  let component: BallotFormPage;
  let fixture: ComponentFixture<BallotFormPage>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotFormPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: UserService, useClass: UserServiceStub },
        ],
      }).compileComponents();

      userService = TestBed.inject(UserService);
      userService.upsertUser({ lastName: 'foo' });

      fixture = TestBed.createComponent(BallotFormPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

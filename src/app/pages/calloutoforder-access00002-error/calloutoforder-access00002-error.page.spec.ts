import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { CalloutoforderAccess00002ErrorPage } from './calloutoforder-access00002-error.page';

describe('CalloutoforderAccess00002ErrorPage', () => {
  let component: CalloutoforderAccess00002ErrorPage;
  let fixture: ComponentFixture<CalloutoforderAccess00002ErrorPage>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CalloutoforderAccess00002ErrorPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      userService = TestBed.inject(UserService);
      userService.upsertUser({ lastName: 'foo' });

      fixture = TestBed.createComponent(CalloutoforderAccess00002ErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

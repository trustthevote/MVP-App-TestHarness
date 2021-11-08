import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { AccessCodeErrorPage } from './access-code-error.page';

describe('AccessCodeErrorPage', () => {
  let component: AccessCodeErrorPage;
  let fixture: ComponentFixture<AccessCodeErrorPage>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccessCodeErrorPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      userService = TestBed.inject(UserService);
      userService.upsertUser({ lastName: 'foo' });

      fixture = TestBed.createComponent(AccessCodeErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

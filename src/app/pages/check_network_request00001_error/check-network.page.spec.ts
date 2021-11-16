import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { CheckNetworkPage } from './check-network.page';

describe('CheckNetworkPage', () => {
  let component: CheckNetworkPage;
  let fixture: ComponentFixture<CheckNetworkPage>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CheckNetworkPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      userService = TestBed.inject(UserService);
      userService.upsertUser({ lastName: 'foo' });

      fixture = TestBed.createComponent(CheckNetworkPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

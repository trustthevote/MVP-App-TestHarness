import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { RequestAccessCodePage } from './request-access-code.page';

const router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('RequestAccessCodePage', () => {
  let component: RequestAccessCodePage;
  let fixture: ComponentFixture<RequestAccessCodePage>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RequestAccessCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useValue: router },
          { provide: UserService, useClass: UserServiceStub },
        ],
      }).compileComponents();

      userService = TestBed.inject(UserService);
    })
  );

  describe('continuebtn', () => {
    it('should navigate to the access code page by default', async () => {
      userService.upsertUser({ lastName: 'foo' });
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/access-code', { t: jasmine.any(Number) }]);
    });
    it('should navigate to the voter record not found page if voter ID is T0000', async () => {
      userService.upsertUser({ lastName: 'T0000' });
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/voter_record_notfound00000_error']);
    });
    it('should navigate to the network code page if voter ID is T0001', async () => {
      userService.upsertUser({ lastName: 'T0001' });
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/check_network_request00001_error']);
    });
  });

  describe('backbtn', () => {
    it('should navigate to ballot complete page', async () => {
      userService.upsertUser({ lastName: 'foo' });
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.backbtn();
      expect(router.navigate).toHaveBeenCalledWith(['/ballot-complete']);
    });
  });
});

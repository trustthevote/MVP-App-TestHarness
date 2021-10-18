import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RequestAccessCodePage } from './request-access-code.page';

const router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('RequestAccessCodePage', () => {
  let component: RequestAccessCodePage;
  let fixture: ComponentFixture<RequestAccessCodePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RequestAccessCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: Router, useValue: router }],
      }).compileComponents();
    })
  );

  describe('continuebtn', () => {
    it('should navigate to the access code page by default', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: 'foo' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/access-code', { t: jasmine.any(Number) }]);
    });
    it('should navigate to the voter record not found page if voter ID is 00000', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: '00000' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/voter_record_notfound00000_error']);
    });
    it('should navigate to the voter record not found page if voter ID is T0000', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: 'T0000' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/voter_record_notfound00000_error']);
    });
    it('should navigate to the network code page if voter ID is 00001', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: '00001' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/check_network_request00001_error']);
    });
    it('should navigate to the network code page if voter ID is T0001', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: 'T0001' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/check_network_request00001_error']);
    });
  });

  describe('backbtn', () => {
    it('should navigate to ballot complete page', async () => {
      localStorage.setItem('userNameInfo', JSON.stringify({ lastname: 'foo' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.backbtn();
      expect(router.navigate).toHaveBeenCalledWith(['/ballot-complete']);
    });
  });
});

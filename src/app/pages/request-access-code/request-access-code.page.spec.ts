import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { RequestAccessCodePage } from './request-access-code.page';

const router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('RequestAccessCodePage', () => {
  let component: RequestAccessCodePage;
  let fixture: ComponentFixture<RequestAccessCodePage>;
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RequestAccessCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useValue: router },
          { provide: LocalStorageRef, useClass: LocalStorageRefStub },
        ],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);
    })
  );

  describe('continuebtn', () => {
    it('should navigate to the access code page by default', async () => {
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'foo' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/access-code', { t: jasmine.any(Number) }]);
    });
    it('should navigate to the voter record not found page if voter ID is T0000', async () => {
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'T0000' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/voter_record_notfound00000_error']);
    });
    it('should navigate to the network code page if voter ID is T0001', async () => {
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'T0001' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.continuebtn();
      expect(router.navigate).toHaveBeenCalledWith(['/check_network_request00001_error']);
    });
  });

  describe('backbtn', () => {
    it('should navigate to ballot complete page', async () => {
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'foo' }));
      fixture = TestBed.createComponent(RequestAccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      await component.backbtn();
      expect(router.navigate).toHaveBeenCalledWith(['/ballot-complete']);
    });
  });
});

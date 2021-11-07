import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { CalloutoforderAccess00002ErrorPage } from './calloutoforder-access00002-error.page';

describe('CalloutoforderAccess00002ErrorPage', () => {
  let component: CalloutoforderAccess00002ErrorPage;
  let fixture: ComponentFixture<CalloutoforderAccess00002ErrorPage>;
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CalloutoforderAccess00002ErrorPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'foo' }));

      fixture = TestBed.createComponent(CalloutoforderAccess00002ErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

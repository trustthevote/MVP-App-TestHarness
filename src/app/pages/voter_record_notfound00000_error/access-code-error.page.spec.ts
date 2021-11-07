import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { AccessCodeErrorPage } from './access-code-error.page';

describe('AccessCodeErrorPage', () => {
  let component: AccessCodeErrorPage;
  let fixture: ComponentFixture<AccessCodeErrorPage>;
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccessCodeErrorPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'foo' }));

      fixture = TestBed.createComponent(AccessCodeErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

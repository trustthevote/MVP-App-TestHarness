import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
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
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotFormPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: LocalStorageRef, useClass: LocalStorageRefStub },
        ],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);
      localStorageRef.getLocalStorage().setItem('userNameInfo', JSON.stringify({ lastName: 'foo' }));

      fixture = TestBed.createComponent(BallotFormPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

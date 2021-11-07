import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { BallotCompletePage } from './ballot-complete.page';

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

describe('BallotCompletePage', () => {
  let component: BallotCompletePage;
  let fixture: ComponentFixture<BallotCompletePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotCompletePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [
          { provide: Router, useClass: RouterStub },
          { provide: LocalStorageRef, useClass: LocalStorageRefStub },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(BallotCompletePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

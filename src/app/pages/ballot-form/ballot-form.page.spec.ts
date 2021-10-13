import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { BallotFormPage } from './ballot-form.page';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          user: 'foo',
        }
      }
    }
  }
}

describe('BallotFormPage', () => {
  let component: BallotFormPage;
  let fixture: ComponentFixture<BallotFormPage>;

  beforeEach(waitForAsync(() => {
    localStorage.setItem('userNameInfo', JSON.stringify({lastname: 'foo'}));
    TestBed.configureTestingModule({
      declarations: [ BallotFormPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [ { provide: Router, useClass: RouterStub } ]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

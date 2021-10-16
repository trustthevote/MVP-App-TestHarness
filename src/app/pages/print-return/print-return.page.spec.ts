import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { PrintReturnPage } from './print-return.page';

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

describe('PrintReturnPage', () => {
  let component: PrintReturnPage;
  let fixture: ComponentFixture<PrintReturnPage>;

  beforeEach(waitForAsync(() => {
    localStorage.setItem('userNameInfo', JSON.stringify({lastname: 'foo'}));
    TestBed.configureTestingModule({
      declarations: [ PrintReturnPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [ { provide: Router, useClass: RouterStub } ]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintReturnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

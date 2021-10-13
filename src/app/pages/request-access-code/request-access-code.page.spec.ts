import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RequestAccessCodePage } from './request-access-code.page';

describe('RequestAccessCodePage', () => {
  let component: RequestAccessCodePage;
  let fixture: ComponentFixture<RequestAccessCodePage>;

  beforeEach(waitForAsync(() => {
    localStorage.setItem('userNameInfo', JSON.stringify({lastname: 'foo'}));
    TestBed.configureTestingModule({
      declarations: [ RequestAccessCodePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(RequestAccessCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

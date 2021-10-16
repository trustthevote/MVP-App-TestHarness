import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { AccessCodeErrorPage } from './access-code-error.page';

describe('AccessCodeErrorPage', () => {
  let component: AccessCodeErrorPage;
  let fixture: ComponentFixture<AccessCodeErrorPage>;

  beforeEach(waitForAsync(() => {
    localStorage.setItem('userNameInfo', JSON.stringify({lastname: 'foo'}));
    TestBed.configureTestingModule({
      declarations: [ AccessCodeErrorPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessCodeErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

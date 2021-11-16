import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { AccessCodePage } from './access-code.page';

describe('AccessCodePage', () => {
  let component: AccessCodePage;
  let fixture: ComponentFixture<AccessCodePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccessCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [FormBuilder, { provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(AccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { BeforeYouFinishPage } from './before-you-finish.page';

describe('BeforeYouFinishPage', () => {
  let component: BeforeYouFinishPage;
  let fixture: ComponentFixture<BeforeYouFinishPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BeforeYouFinishPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(BeforeYouFinishPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

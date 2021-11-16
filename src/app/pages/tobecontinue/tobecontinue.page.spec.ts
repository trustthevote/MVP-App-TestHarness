import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UserService } from 'src/app/class/user/user.service';
import { UserServiceStub } from 'src/app/class/user/user.service.stub';
import { TobecontinuePage } from './tobecontinue.page';

describe('TobecontinuePage', () => {
  let component: TobecontinuePage;
  let fixture: ComponentFixture<TobecontinuePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TobecontinuePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: UserService, useClass: UserServiceStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(TobecontinuePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

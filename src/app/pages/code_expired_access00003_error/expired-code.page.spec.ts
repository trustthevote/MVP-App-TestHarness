import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ExpiredCodePage } from './expired-code.page';

describe('ExpiredCodePage', () => {
  let component: ExpiredCodePage;
  let fixture: ComponentFixture<ExpiredCodePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExpiredCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(ExpiredCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

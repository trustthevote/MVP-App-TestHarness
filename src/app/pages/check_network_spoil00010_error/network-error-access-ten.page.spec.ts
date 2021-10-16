import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccessTenPage } from './network-error-access-ten.page';

describe('NetworkErrorAccessTenPage', () => {
  let component: NetworkErrorAccessTenPage;
  let fixture: ComponentFixture<NetworkErrorAccessTenPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NetworkErrorAccessTenPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(NetworkErrorAccessTenPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckNetworkAccess00005ErrorPage } from './check-network-access00005-error.page';

describe('CheckNetworkAccess00005ErrorPage', () => {
  let component: CheckNetworkAccess00005ErrorPage;
  let fixture: ComponentFixture<CheckNetworkAccess00005ErrorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckNetworkAccess00005ErrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckNetworkAccess00005ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

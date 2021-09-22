import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccess12Page } from './network-error-access12.page';

describe('NetworkErrorAccess12Page', () => {
  let component: NetworkErrorAccess12Page;
  let fixture: ComponentFixture<NetworkErrorAccess12Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkErrorAccess12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkErrorAccess12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

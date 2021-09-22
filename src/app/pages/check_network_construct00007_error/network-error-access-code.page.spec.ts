import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccessCodePage } from './network-error-access-code.page';

describe('NetworkErrorAccessCodePage', () => {
  let component: NetworkErrorAccessCodePage;
  let fixture: ComponentFixture<NetworkErrorAccessCodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkErrorAccessCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkErrorAccessCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

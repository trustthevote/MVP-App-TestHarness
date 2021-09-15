import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckNetworkOOOOErrorPage } from './check-network-oooo-error.page';

describe('CheckNetworkOOOOErrorPage', () => {
  let component: CheckNetworkOOOOErrorPage;
  let fixture: ComponentFixture<CheckNetworkOOOOErrorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckNetworkOOOOErrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckNetworkOOOOErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

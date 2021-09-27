import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CalloutoforderAccess00002ErrorPage } from './calloutoforder-access00002-error.page';

describe('CalloutoforderAccess00002ErrorPage', () => {
  let component: CalloutoforderAccess00002ErrorPage;
  let fixture: ComponentFixture<CalloutoforderAccess00002ErrorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalloutoforderAccess00002ErrorPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CalloutoforderAccess00002ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

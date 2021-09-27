import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { DigitalReturnNextStepsPage } from './digital-return-next-steps.page';

describe('DigitalReturnNextStepsPage', () => {
  let component: DigitalReturnNextStepsPage;
  let fixture: ComponentFixture<DigitalReturnNextStepsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalReturnNextStepsPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalReturnNextStepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

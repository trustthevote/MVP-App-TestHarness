import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { TestResultsBallotPrepErrorPage } from './test-results-ballot-prep-error.page';

describe('TestResultsBallotPrepErrorPage', () => {
  let component: TestResultsBallotPrepErrorPage;
  let fixture: ComponentFixture<TestResultsBallotPrepErrorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestResultsBallotPrepErrorPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestResultsBallotPrepErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

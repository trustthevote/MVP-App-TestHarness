import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestResultsFaildErrorPage } from './test-results-faild-error.page';

describe('TestResultsFaildErrorPage', () => {
  let component: TestResultsFaildErrorPage;
  let fixture: ComponentFixture<TestResultsFaildErrorPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestResultsFaildErrorPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(TestResultsFaildErrorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

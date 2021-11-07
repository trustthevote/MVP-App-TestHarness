import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { TestResultsPage } from './test-results.page';

describe('TestResultsPage', () => {
  let component: TestResultsPage;
  let fixture: ComponentFixture<TestResultsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestResultsPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(TestResultsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

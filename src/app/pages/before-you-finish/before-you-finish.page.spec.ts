import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { BeforeYouFinishPage } from './before-you-finish.page';

describe('BeforeYouFinishPage', () => {
  let component: BeforeYouFinishPage;
  let fixture: ComponentFixture<BeforeYouFinishPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BeforeYouFinishPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(BeforeYouFinishPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

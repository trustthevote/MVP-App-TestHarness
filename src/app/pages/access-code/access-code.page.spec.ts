import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { AccessCodePage } from './access-code.page';

describe('AccessCodePage', () => {
  let component: AccessCodePage;
  let fixture: ComponentFixture<AccessCodePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccessCodePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [FormBuilder, { provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      fixture = TestBed.createComponent(AccessCodePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

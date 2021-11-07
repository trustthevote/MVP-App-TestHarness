import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { BallotPage } from './ballot.page';

describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BallotPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [FormBuilder, { provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);

      fixture = TestBed.createComponent(BallotPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

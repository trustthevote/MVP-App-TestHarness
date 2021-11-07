import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LocalStorageRef } from 'src/app/class/local-storage-ref/local-storage-ref.service';
import { LocalStorageRefStub } from 'src/app/class/local-storage-ref/local-storage-ref.stub';
import { TobecontinuePage } from './tobecontinue.page';

describe('TobecontinuePage', () => {
  let component: TobecontinuePage;
  let fixture: ComponentFixture<TobecontinuePage>;
  let localStorageRef: LocalStorageRef;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TobecontinuePage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [{ provide: LocalStorageRef, useClass: LocalStorageRefStub }],
      }).compileComponents();

      localStorageRef = TestBed.inject(LocalStorageRef);

      fixture = TestBed.createComponent(TobecontinuePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

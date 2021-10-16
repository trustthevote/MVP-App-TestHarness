import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

import { BallotPage } from './ballot.page';

describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BallotPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

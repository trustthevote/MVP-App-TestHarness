import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { TobecontinuePage } from './tobecontinue.page';

describe('TobecontinuePage', () => {
  let component: TobecontinuePage;
  let fixture: ComponentFixture<TobecontinuePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TobecontinuePage ],
	imports: [IonicModule.forRoot(),
		  RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TobecontinuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

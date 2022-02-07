import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CannotSeeBallotPage } from './cannot-see-ballot.page';

describe('CannotSeeBallotPage', () => {
  let component: CannotSeeBallotPage;
  let fixture: ComponentFixture<CannotSeeBallotPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CannotSeeBallotPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(CannotSeeBallotPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

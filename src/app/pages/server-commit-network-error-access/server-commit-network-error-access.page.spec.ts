import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ServerCommitNetworkErrorAccessPage } from './server-commit-network-error-access.page';

describe('ServerCommitNetworkErrorAccessPage', () => {
  let component: ServerCommitNetworkErrorAccessPage;
  let fixture: ComponentFixture<ServerCommitNetworkErrorAccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCommitNetworkErrorAccessPage ],
	imports: [IonicModule.forRoot(),
		 RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerCommitNetworkErrorAccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

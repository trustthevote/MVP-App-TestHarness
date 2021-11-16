import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResultsBallotPrepErrorPageRoutingModule } from './test-results-ballot-prep-error-routing.module';

import { TestResultsBallotPrepErrorPage } from './test-results-ballot-prep-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestResultsBallotPrepErrorPageRoutingModule,
  ],
  declarations: [TestResultsBallotPrepErrorPage],
})
export class TestResultsBallotPrepErrorPageModule {}

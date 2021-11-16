import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotTestFailedTestPageRoutingModule } from './ballot-test-failed-test-routing.module';

import { BallotTestFailedTestPage } from './ballot-test-failed-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotTestFailedTestPageRoutingModule,
  ],
  declarations: [BallotTestFailedTestPage],
})
export class BallotTestFailedTestPageModule {}

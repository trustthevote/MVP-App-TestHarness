import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotTestFailErrPageRoutingModule } from './ballot-test-fail-err-routing.module';

import { BallotTestFailErrPage } from './ballot-test-fail-err.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotTestFailErrPageRoutingModule,
  ],
  declarations: [BallotTestFailErrPage],
})
export class BallotTestFailErrPageModule {}

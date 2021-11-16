import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotTestFailedPageRoutingModule } from './ballot-test-failed-routing.module';

import { BallotTestFailedPage } from './ballot-test-failed.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BallotTestFailedPageRoutingModule],
  declarations: [BallotTestFailedPage],
})
export class BallotTestFailedPageModule {}

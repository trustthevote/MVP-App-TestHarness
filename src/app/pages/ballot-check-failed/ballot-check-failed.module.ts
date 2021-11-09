import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotCheckFailedPageRoutingModule } from './ballot-check-failed-routing.module';

import { BallotCheckFailedPage } from './ballot-check-failed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotCheckFailedPageRoutingModule,
  ],
  declarations: [BallotCheckFailedPage],
})
export class BallotCheckFailedPageModule {}

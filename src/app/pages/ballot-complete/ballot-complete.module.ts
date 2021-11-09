import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotCompletePageRoutingModule } from './ballot-complete-routing.module';

import { BallotCompletePage } from './ballot-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotCompletePageRoutingModule,
  ],
  declarations: [BallotCompletePage],
})
export class BallotCompletePageModule {}

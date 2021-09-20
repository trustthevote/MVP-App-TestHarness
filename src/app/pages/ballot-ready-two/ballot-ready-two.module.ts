import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotReadyTwoPageRoutingModule } from './ballot-ready-two-routing.module';

import { BallotReadyTwoPage } from './ballot-ready-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotReadyTwoPageRoutingModule
  ],
  declarations: [BallotReadyTwoPage]
})
export class BallotReadyTwoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotPrepErrorPageRoutingModule } from './ballot-prep-error-routing.module';

import { BallotPrepErrorPage } from './ballot-prep-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotPrepErrorPageRoutingModule
  ],
  declarations: [BallotPrepErrorPage]
})
export class BallotPrepErrorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotReadyPrepErrorPageRoutingModule } from './ballot-ready-prep-error-routing.module';

import { BallotReadyPrepErrorPage } from './ballot-ready-prep-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotReadyPrepErrorPageRoutingModule,
  ],
  declarations: [BallotReadyPrepErrorPage],
})
export class BallotReadyPrepErrorPageModule {}

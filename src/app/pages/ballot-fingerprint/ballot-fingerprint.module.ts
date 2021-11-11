import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BallotFingerprintPageRoutingModule } from './ballot-fingerprint-routing.module';

import { BallotFingerprintPage } from './ballot-fingerprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotFingerprintPageRoutingModule,
  ],
  declarations: [BallotFingerprintPage],
})
export class BallotFingerprintPageModule {}

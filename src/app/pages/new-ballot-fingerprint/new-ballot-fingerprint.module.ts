import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBallotFingerprintPageRoutingModule } from './new-ballot-fingerprint-routing.module';

import { NewBallotFingerprintPage } from './new-ballot-fingerprint.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NewBallotFingerprintPageRoutingModule],
  declarations: [NewBallotFingerprintPage],
})
export class NewBallotFingerprintPageModule {}

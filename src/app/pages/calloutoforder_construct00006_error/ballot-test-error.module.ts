import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotTestErrorPageRoutingModule } from './ballot-test-error-routing.module';

import { BallotTestErrorPage } from './ballot-test-error.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BallotTestErrorPageRoutingModule],
  declarations: [BallotTestErrorPage],
})
export class BallotTestErrorPageModule {}

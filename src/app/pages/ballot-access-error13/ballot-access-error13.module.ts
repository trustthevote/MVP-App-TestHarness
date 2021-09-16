import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotAccessError13PageRoutingModule } from './ballot-access-error13-routing.module';

import { BallotAccessError13Page } from './ballot-access-error13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotAccessError13PageRoutingModule
  ],
  declarations: [BallotAccessError13Page]
})
export class BallotAccessError13PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotResealedPageRoutingModule } from './ballot-resealed-routing.module';

import { BallotResealedPage } from './ballot-resealed.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BallotResealedPageRoutingModule],
  declarations: [BallotResealedPage],
})
export class BallotResealedPageModule {}

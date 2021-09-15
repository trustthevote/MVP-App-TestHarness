import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallotOopsScreenPageRoutingModule } from './ballot-oops-screen-routing.module';

import { BallotOopsScreenPage } from './ballot-oops-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotOopsScreenPageRoutingModule
  ],
  declarations: [BallotOopsScreenPage]
})
export class BallotOopsScreenPageModule {}

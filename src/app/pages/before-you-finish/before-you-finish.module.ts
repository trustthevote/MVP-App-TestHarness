import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeYouFinishPageRoutingModule } from './before-you-finish-routing.module';

import { BeforeYouFinishPage } from './before-you-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeYouFinishPageRoutingModule
  ],
  declarations: [BeforeYouFinishPage]
})
export class BeforeYouFinishPageModule {}

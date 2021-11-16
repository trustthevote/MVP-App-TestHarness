import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalReturnNextStepsPageRoutingModule } from './digital-return-next-steps-routing.module';

import { DigitalReturnNextStepsPage } from './digital-return-next-steps.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DigitalReturnNextStepsPageRoutingModule],
  declarations: [DigitalReturnNextStepsPage],
})
export class DigitalReturnNextStepsPageModule {}

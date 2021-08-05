import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendingConfirmationPageRoutingModule } from './sending-confirmation-routing.module';

import { SendingConfirmationPage } from './sending-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendingConfirmationPageRoutingModule
  ],
  declarations: [SendingConfirmationPage]
})
export class SendingConfirmationPageModule {}

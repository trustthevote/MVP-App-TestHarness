import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkErrorRequestCodePageRoutingModule } from './network-error-request-code-routing.module';

import { NetworkErrorRequestCodePage } from './network-error-request-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkErrorRequestCodePageRoutingModule
  ],
  declarations: [NetworkErrorRequestCodePage]
})
export class NetworkErrorRequestCodePageModule {}

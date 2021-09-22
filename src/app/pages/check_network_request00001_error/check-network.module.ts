import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckNetworkPageRoutingModule } from './check-network-routing.module';

import { CheckNetworkPage } from './check-network.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckNetworkPageRoutingModule
  ],
  declarations: [CheckNetworkPage]
})
export class CheckNetworkPageModule {}

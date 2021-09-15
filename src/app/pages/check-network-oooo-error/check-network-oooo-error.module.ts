import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckNetworkOOOOErrorPageRoutingModule } from './check-network-oooo-error-routing.module';

import { CheckNetworkOOOOErrorPage } from './check-network-oooo-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckNetworkOOOOErrorPageRoutingModule
  ],
  declarations: [CheckNetworkOOOOErrorPage]
})
export class CheckNetworkOOOOErrorPageModule {}

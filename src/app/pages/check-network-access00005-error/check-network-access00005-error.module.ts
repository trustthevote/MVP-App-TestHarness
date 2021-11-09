import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckNetworkAccess00005ErrorPageRoutingModule } from './check-network-access00005-error-routing.module';

import { CheckNetworkAccess00005ErrorPage } from './check-network-access00005-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckNetworkAccess00005ErrorPageRoutingModule,
  ],
  declarations: [CheckNetworkAccess00005ErrorPage],
})
export class CheckNetworkAccess00005ErrorPageModule {}

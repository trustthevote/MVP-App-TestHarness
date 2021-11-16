import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccessTenPageRoutingModule } from './network-error-access-ten-routing.module';

import { NetworkErrorAccessTenPage } from './network-error-access-ten.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NetworkErrorAccessTenPageRoutingModule],
  declarations: [NetworkErrorAccessTenPage],
})
export class NetworkErrorAccessTenPageModule {}

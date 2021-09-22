import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccess12PageRoutingModule } from './network-error-access12-routing.module';

import { NetworkErrorAccess12Page } from './network-error-access12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkErrorAccess12PageRoutingModule
  ],
  declarations: [NetworkErrorAccess12Page]
})
export class NetworkErrorAccess12PageModule {}

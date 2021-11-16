import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkErrorAccessCodePageRoutingModule } from './network-error-access-code-routing.module';

import { NetworkErrorAccessCodePage } from './network-error-access-code.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NetworkErrorAccessCodePageRoutingModule],
  declarations: [NetworkErrorAccessCodePage],
})
export class NetworkErrorAccessCodePageModule {}

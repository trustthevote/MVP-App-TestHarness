import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerCommitNetworkErrorAccessPageRoutingModule } from './server-commit-network-error-access-routing.module';

import { ServerCommitNetworkErrorAccessPage } from './server-commit-network-error-access.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServerCommitNetworkErrorAccessPageRoutingModule,
  ],
  declarations: [ServerCommitNetworkErrorAccessPage],
})
export class ServerCommitNetworkErrorAccessPageModule {}

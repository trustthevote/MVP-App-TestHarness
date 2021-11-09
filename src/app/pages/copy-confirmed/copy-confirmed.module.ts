import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopyConfirmedPageRoutingModule } from './copy-confirmed-routing.module';

import { CopyConfirmedPage } from './copy-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopyConfirmedPageRoutingModule,
  ],
  declarations: [CopyConfirmedPage],
})
export class CopyConfirmedPageModule {}

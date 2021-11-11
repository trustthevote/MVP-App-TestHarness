import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintReturnPageRoutingModule } from './print-return-routing.module';

import { PrintReturnPage } from './print-return.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintReturnPageRoutingModule,
  ],
  declarations: [PrintReturnPage],
})
export class PrintReturnPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpiredCodePageRoutingModule } from './expired-code-routing.module';

import { ExpiredCodePage } from './expired-code.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ExpiredCodePageRoutingModule],
  declarations: [ExpiredCodePage],
})
export class ExpiredCodePageModule {}

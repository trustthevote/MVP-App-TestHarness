import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTimeOutPageRoutingModule } from './user-time-out-routing.module';

import { UserTimeOutPage } from './user-time-out.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, UserTimeOutPageRoutingModule],
  declarations: [UserTimeOutPage],
})
export class UserTimeOutPageModule {}

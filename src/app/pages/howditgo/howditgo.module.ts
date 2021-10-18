import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowditgoPageRoutingModule } from './howditgo-routing.module';

import { HowditgoPage } from './howditgo.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HowditgoPageRoutingModule],
  declarations: [HowditgoPage],
})
export class HowditgoPageModule {}

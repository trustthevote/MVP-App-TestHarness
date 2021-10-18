import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AccessCodePageRoutingModule } from './access-code-routing.module';

import { AccessCodePage } from './access-code.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, AccessCodePageRoutingModule],
  declarations: [AccessCodePage],
})
export class AccessCodePageModule {}

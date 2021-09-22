import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessCodeErrorPageRoutingModule } from './access-code-error-routing.module';

import { AccessCodeErrorPage } from './access-code-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessCodeErrorPageRoutingModule
  ],
  declarations: [AccessCodeErrorPage]
})
export class AccessCodeErrorPageModule {}

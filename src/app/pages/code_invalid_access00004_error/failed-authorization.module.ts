import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FailedAuthorizationPageRoutingModule } from './failed-authorization-routing.module';

import { FailedAuthorizationPage } from './failed-authorization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FailedAuthorizationPageRoutingModule,
  ],
  declarations: [FailedAuthorizationPage],
})
export class FailedAuthorizationPageModule {}

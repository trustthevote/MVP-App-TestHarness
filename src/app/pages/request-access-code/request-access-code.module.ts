import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RequestAccessCodePageRoutingModule } from './request-access-code-routing.module';
import { RequestAccessCodePage } from './request-access-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestAccessCodePageRoutingModule
  ],
  declarations: [RequestAccessCodePage]
})
export class RequestAccessCodePageModule {}

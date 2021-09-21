import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TobecontinuePageRoutingModule } from './tobecontinue-routing.module';
import { TobecontinuePage } from './tobecontinue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TobecontinuePageRoutingModule
  ],
  declarations: [TobecontinuePage]
})
export class TobecontinuePageModule { }

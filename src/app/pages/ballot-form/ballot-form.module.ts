import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BallotFormPageRoutingModule } from './ballot-form-routing.module';
import { BallotFormPage } from './ballot-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallotFormPageRoutingModule
  ],
  declarations: [BallotFormPage]
})
export class BallotFormPageModule { }

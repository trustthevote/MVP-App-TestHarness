import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResultsFaildErrorPageRoutingModule } from './test-results-faild-error-routing.module';

import { TestResultsFaildErrorPage } from './test-results-faild-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestResultsFaildErrorPageRoutingModule,
  ],
  declarations: [TestResultsFaildErrorPage],
})
export class TestResultsFaildErrorPageModule {}

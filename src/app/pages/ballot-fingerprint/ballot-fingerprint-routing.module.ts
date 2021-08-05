import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotFingerprintPage } from './ballot-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: BallotFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotFingerprintPageRoutingModule {}

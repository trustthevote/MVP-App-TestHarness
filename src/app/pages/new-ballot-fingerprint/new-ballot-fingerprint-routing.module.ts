import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBallotFingerprintPage } from './new-ballot-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: NewBallotFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBallotFingerprintPageRoutingModule {}

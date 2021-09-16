import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotTestFailErrPage } from './ballot-test-fail-err.page';

const routes: Routes = [
  {
    path: '',
    component: BallotTestFailErrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotTestFailErrPageRoutingModule {}

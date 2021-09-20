import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotTestFailedTestPage } from './ballot-test-failed-test.page';

const routes: Routes = [
  {
    path: '',
    component: BallotTestFailedTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotTestFailedTestPageRoutingModule {}

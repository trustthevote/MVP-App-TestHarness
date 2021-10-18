import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotTestFailedPage } from './ballot-test-failed.page';

const routes: Routes = [
  {
    path: '',
    component: BallotTestFailedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotTestFailedPageRoutingModule {}

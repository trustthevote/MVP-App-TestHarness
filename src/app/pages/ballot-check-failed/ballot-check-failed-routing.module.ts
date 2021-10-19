import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotCheckFailedPage } from './ballot-check-failed.page';

const routes: Routes = [
  {
    path: '',
    component: BallotCheckFailedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotCheckFailedPageRoutingModule {}

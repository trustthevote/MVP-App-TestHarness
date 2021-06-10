import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotCompletePage } from './ballot-complete.page';

const routes: Routes = [
  {
    path: '',
    component: BallotCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotCompletePageRoutingModule {}

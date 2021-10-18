import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotPrepErrorPage } from './ballot-prep-error.page';

const routes: Routes = [
  {
    path: '',
    component: BallotPrepErrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotPrepErrorPageRoutingModule {}

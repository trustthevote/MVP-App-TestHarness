import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotReadyPrepErrorPage } from './ballot-ready-prep-error.page';

const routes: Routes = [
  {
    path: '',
    component: BallotReadyPrepErrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotReadyPrepErrorPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotReadyTwoPage } from './ballot-ready-two.page';

const routes: Routes = [
  {
    path: '',
    component: BallotReadyTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotReadyTwoPageRoutingModule {}

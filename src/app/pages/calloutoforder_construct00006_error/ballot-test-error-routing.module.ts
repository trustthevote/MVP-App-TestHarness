import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotTestErrorPage } from './ballot-test-error.page';

const routes: Routes = [
  {
    path: '',
    component: BallotTestErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotTestErrorPageRoutingModule {}

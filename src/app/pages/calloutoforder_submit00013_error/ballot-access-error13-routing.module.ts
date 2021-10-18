import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotAccessError13Page } from './ballot-access-error13.page';

const routes: Routes = [
  {
    path: '',
    component: BallotAccessError13Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotAccessError13PageRoutingModule {}

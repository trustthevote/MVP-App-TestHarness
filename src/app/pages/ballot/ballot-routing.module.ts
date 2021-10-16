import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BallotPage } from './ballot.page';

const routes: Routes = [
  {
    path: '',
    component: BallotPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class BallotPageRoutingModule {}

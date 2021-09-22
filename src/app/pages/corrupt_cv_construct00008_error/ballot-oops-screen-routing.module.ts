import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotOopsScreenPage } from './ballot-oops-screen.page';

const routes: Routes = [
  {
    path: '',
    component: BallotOopsScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotOopsScreenPageRoutingModule {}

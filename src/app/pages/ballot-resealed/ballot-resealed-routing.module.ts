import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotResealedPage } from './ballot-resealed.page';

const routes: Routes = [
  {
    path: '',
    component: BallotResealedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotResealedPageRoutingModule {}

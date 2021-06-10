import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallotFormPage } from './ballot-form.page';

const routes: Routes = [
  {
    path: '',
    component: BallotFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallotFormPageRoutingModule {}

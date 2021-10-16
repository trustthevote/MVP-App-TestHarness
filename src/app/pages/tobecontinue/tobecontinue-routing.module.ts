import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TobecontinuePage } from './tobecontinue.page';

const routes: Routes = [
  {
    path: '',
    component: TobecontinuePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TobecontinuePageRoutingModule {}

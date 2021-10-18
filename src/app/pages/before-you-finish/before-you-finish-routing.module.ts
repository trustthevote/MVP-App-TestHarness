import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeYouFinishPage } from './before-you-finish.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeYouFinishPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeYouFinishPageRoutingModule {}

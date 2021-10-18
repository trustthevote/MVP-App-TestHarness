import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopyConfirmedPage } from './copy-confirmed.page';

const routes: Routes = [
  {
    path: '',
    component: CopyConfirmedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopyConfirmedPageRoutingModule {}

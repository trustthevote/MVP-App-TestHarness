import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkErrorAccess12Page } from './network-error-access12.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkErrorAccess12Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkErrorAccess12PageRoutingModule {}

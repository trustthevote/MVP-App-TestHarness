import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckNetworkAccess00005ErrorPage } from './check-network-access00005-error.page';

const routes: Routes = [
  {
    path: '',
    component: CheckNetworkAccess00005ErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckNetworkAccess00005ErrorPageRoutingModule {}

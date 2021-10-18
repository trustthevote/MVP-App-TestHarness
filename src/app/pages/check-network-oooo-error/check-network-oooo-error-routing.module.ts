import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckNetworkOOOOErrorPage } from './check-network-oooo-error.page';

const routes: Routes = [
  {
    path: '',
    component: CheckNetworkOOOOErrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckNetworkOOOOErrorPageRoutingModule {}

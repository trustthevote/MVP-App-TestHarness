import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckNetworkPage } from './check-network.page';

const routes: Routes = [
  {
    path: '',
    component: CheckNetworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckNetworkPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkErrorAccessTenPage } from './network-error-access-ten.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkErrorAccessTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkErrorAccessTenPageRoutingModule {}

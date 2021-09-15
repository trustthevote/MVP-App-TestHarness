import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkErrorAccessCodePage } from './network-error-access-code.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkErrorAccessCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkErrorAccessCodePageRoutingModule {}

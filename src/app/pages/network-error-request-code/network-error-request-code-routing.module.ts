import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkErrorRequestCodePage } from './network-error-request-code.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkErrorRequestCodePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkErrorRequestCodePageRoutingModule {}

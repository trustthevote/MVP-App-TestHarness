import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerCommitNetworkErrorAccessPage } from './server-commit-network-error-access.page';

const routes: Routes = [
  {
    path: '',
    component: ServerCommitNetworkErrorAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerCommitNetworkErrorAccessPageRoutingModule {}

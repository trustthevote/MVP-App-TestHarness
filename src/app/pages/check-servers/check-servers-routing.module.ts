import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckServersPage } from './check-servers.page';

const routes: Routes = [
  {
    path: '',
    component: CheckServersPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckServersPageRoutingModule {}

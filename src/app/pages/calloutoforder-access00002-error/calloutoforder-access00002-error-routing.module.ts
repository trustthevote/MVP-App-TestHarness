import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalloutoforderAccess00002ErrorPage } from './calloutoforder-access00002-error.page';

const routes: Routes = [
  {
    path: '',
    component: CalloutoforderAccess00002ErrorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalloutoforderAccess00002ErrorPageRoutingModule {}

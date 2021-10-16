import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestAccessCodePage } from './request-access-code.page';

const routes: Routes = [
  {
    path: '',
    component: RequestAccessCodePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestAccessCodePageRoutingModule {}

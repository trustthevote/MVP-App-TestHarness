import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailedAuthorizationPage } from './failed-authorization.page';

const routes: Routes = [
  {
    path: '',
    component: FailedAuthorizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailedAuthorizationPageRoutingModule {}

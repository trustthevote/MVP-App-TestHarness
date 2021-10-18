import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTimeOutPage } from './user-time-out.page';

const routes: Routes = [
  {
    path: '',
    component: UserTimeOutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTimeOutPageRoutingModule {}

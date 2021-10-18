import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiredCodePage } from './expired-code.page';

const routes: Routes = [
  {
    path: '',
    component: ExpiredCodePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpiredCodePageRoutingModule {}

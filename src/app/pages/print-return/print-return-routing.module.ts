import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintReturnPage } from './print-return.page';

const routes: Routes = [
  {
    path: '',
    component: PrintReturnPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintReturnPageRoutingModule {}

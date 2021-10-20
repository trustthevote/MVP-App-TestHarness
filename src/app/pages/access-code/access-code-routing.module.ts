import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessCodePage } from './access-code.page';

const routes: Routes = [
  {
    path: '',
    component: AccessCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessCodePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessCodeErrorPage } from './access-code-error.page';

const routes: Routes = [
  {
    path: '',
    component: AccessCodeErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessCodeErrorPageRoutingModule {}

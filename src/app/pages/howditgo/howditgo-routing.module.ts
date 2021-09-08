import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowditgoPage } from './howditgo.page';

const routes: Routes = [
  {
    path: '',
    component: HowditgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowditgoPageRoutingModule {}

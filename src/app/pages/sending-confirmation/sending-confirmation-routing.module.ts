import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendingConfirmationPage } from './sending-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: SendingConfirmationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendingConfirmationPageRoutingModule {}

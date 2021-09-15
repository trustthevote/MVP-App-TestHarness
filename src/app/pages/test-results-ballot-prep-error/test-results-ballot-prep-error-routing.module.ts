import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestResultsBallotPrepErrorPage } from './test-results-ballot-prep-error.page';

const routes: Routes = [
  {
    path: '',
    component: TestResultsBallotPrepErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestResultsBallotPrepErrorPageRoutingModule {}

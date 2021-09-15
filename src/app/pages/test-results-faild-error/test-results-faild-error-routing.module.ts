import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestResultsFaildErrorPage } from './test-results-faild-error.page';

const routes: Routes = [
  {
    path: '',
    component: TestResultsFaildErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestResultsFaildErrorPageRoutingModule {}

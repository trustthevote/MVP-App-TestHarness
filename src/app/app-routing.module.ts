import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'ballot',
    loadChildren: () => import('./pages/ballot/ballot.module').then( m => m.BallotPageModule)
  },
  {
    path: 'ballot-form',
    loadChildren: () => import('./pages/ballot-form/ballot-form.module').then( m => m.BallotFormPageModule)
  },
  {
    path: 'ballot-complete',
    loadChildren: () => import('./pages/ballot-complete/ballot-complete.module').then( m => m.BallotCompletePageModule)
  },
  {
    path: 'print',
    loadChildren: () => import('./pages/print/print.module').then( m => m.PrintPageModule)
  },
  {
    path: 'access-code',
    loadChildren: () => import('./pages/access-code/access-code.module').then( m => m.AccessCodePageModule)
  },
  {
    path: 'ballot-fingerprint',
    loadChildren: () => import('./pages/ballot-fingerprint/ballot-fingerprint.module').then( m => m.BallotFingerprintPageModule)
  },
  {
    path: 'failed-authorization',
    loadChildren: () => import('./pages/failed-authorization/failed-authorization.module').then( m => m.FailedAuthorizationPageModule)
  },
  {
    path: 'copy-confirmed',
    loadChildren: () => import('./pages/copy-confirmed/copy-confirmed.module').then( m => m.CopyConfirmedPageModule)
  },
  {
    path: 'sending',
    loadChildren: () => import('./pages/sending/sending.module').then( m => m.SendingPageModule)
  },
  {
    path: 'test-results',
    loadChildren: () => import('./pages/test-results/test-results.module').then( m => m.TestResultsPageModule)
  },
  {
    path: 'new-ballot-fingerprint',
    loadChildren: () => import('./pages/new-ballot-fingerprint/new-ballot-fingerprint.module').then( m => m.NewBallotFingerprintPageModule)
  },
  {
    path: 'check-network',
    loadChildren: () => import('./pages/check-network/check-network.module').then( m => m.CheckNetworkPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'sending-confirmation',
    loadChildren: () => import('./pages/sending-confirmation/sending-confirmation.module').then( m => m.SendingConfirmationPageModule)
  },
  {
    path: 'check-servers',
    loadChildren: () => import('./pages/check-servers/check-servers.module').then( m => m.CheckServersPageModule)
  },
  {
    path: 'digital-return-next-steps',
    loadChildren: () => import('./pages/digital-return-next-steps/digital-return-next-steps.module').then( m => m.DigitalReturnNextStepsPageModule)
  },
  {
    path: 'print-return',
    loadChildren: () => import('./pages/print-return/print-return.module').then( m => m.PrintReturnPageModule)
  },
  {
    path: 'user-time-out',
    loadChildren: () => import('./pages/user-time-out/user-time-out.module').then( m => m.UserTimeOutPageModule)
  },
  {
    path: 'tobecontinue',
    loadChildren: () => import('./pages/tobecontinue/tobecontinue.module').then( m => m.TobecontinuePageModule)
  },
  {
    path: 'ballot-test-failed',
    loadChildren: () => import('./pages/ballot-test-failed/ballot-test-failed.module').then( m => m.BallotTestFailedPageModule)
  },
  {
    path: 'expired-code',
    loadChildren: () => import('./pages/expired-code/expired-code.module').then( m => m.ExpiredCodePageModule)
  },
  {
    path: 'howditgo',
    loadChildren: () => import('./pages/howditgo/howditgo.module').then( m => m.HowditgoPageModule)
  },
  {
    path: 'request-access-code',
    loadChildren: () => import('./pages/request-access-code/request-access-code.module').then( m => m.RequestAccessCodePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'network-error-access-code',
    loadChildren: () => import('./pages/network-error-access-code/network-error-access-code.module').then( m => m.NetworkErrorAccessCodePageModule)
  },
  {
    path: 'ballot-test-error',
    loadChildren: () => import('./pages/ballot-test-error/ballot-test-error.module').then( m => m.BallotTestErrorPageModule)
  },
{
  path: 'ballot-prep-error',
  loadChildren: () => import('./pages/ballot-prep-error/ballot-prep-error.module').then( m => m.BallotPrepErrorPageModule)
},
{
  path: 'before-you-finish',
  loadChildren: () => import('./pages/before-you-finish/before-you-finish.module').then( m => m.BeforeYouFinishPageModule)
},
  {
    path: 'ballot-oops-screen',
    loadChildren: () => import('./pages/ballot-oops-screen/ballot-oops-screen.module').then( m => m.BallotOopsScreenPageModule)
  },
  {
    path: 'check-network-oooo-error',
    loadChildren: () => import('./pages/check-network-oooo-error/check-network-oooo-error.module').then( m => m.CheckNetworkOOOOErrorPageModule)
  },
  {
    path: 'test-results-faild-error',
    loadChildren: () => import('./pages/test-results-faild-error/test-results-faild-error.module').then( m => m.TestResultsFaildErrorPageModule)
  },
  {
    path: 'check-network-access00005-error',
    loadChildren: () => import('./pages/check-network-access00005-error/check-network-access00005-error.module').then( m => m.CheckNetworkAccess00005ErrorPageModule)
  },
  {
    path: 'test-results-ballot-prep-error',
    loadChildren: () => import('./pages/test-results-ballot-prep-error/test-results-ballot-prep-error.module').then( m => m.TestResultsBallotPrepErrorPageModule)

  },
  {
    path: 'network-error-request-code',
    loadChildren: () => import('./pages/network-error-request-code/network-error-request-code.module').then( m => m.NetworkErrorRequestCodePageModule)
  },
  {
    path: 'ballot-ready-prep-error',
    loadChildren: () => import('./pages/ballot-ready-prep-error/ballot-ready-prep-error.module').then( m => m.BallotReadyPrepErrorPageModule)
 
  },
  {
    path: 'network-error-access-ten',
    loadChildren: () => import('./pages/network-error-access-ten/network-error-access-ten.module').then( m => m.NetworkErrorAccessTenPageModule)
  },
  {
    path: 'ballot-test-fail-err',
    loadChildren: () => import('./pages/ballot-test-fail-err/ballot-test-fail-err.module').then( m => m.BallotTestFailErrPageModule)
  },
  {
    path: 'server-commit-network-error-access',
    loadChildren: () => import('./pages/server-commit-network-error-access/server-commit-network-error-access.module').then( m => m.ServerCommitNetworkErrorAccessPageModule)
  },
  {
    path: 'network-error-access12',
    loadChildren: () => import('./pages/network-error-access12/network-error-access12.module').then( m => m.NetworkErrorAccess12PageModule)
  },  {
    path: 'ballot-access-error13',
    loadChildren: () => import('./pages/ballot-access-error13/ballot-access-error13.module').then( m => m.BallotAccessError13PageModule)
  },
  {
    path: 'access-code-error',
    loadChildren: () => import('./pages/access-code-error/access-code-error.module').then( m => m.AccessCodeErrorPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

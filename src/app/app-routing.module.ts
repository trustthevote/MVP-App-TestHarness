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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

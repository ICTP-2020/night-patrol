import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'shift-report',
    loadChildren: () => import('./pages/shift-report/shift-report.module').then( m => m.ShiftReportPageModule)
  },
  {
    path: 'night-patrol-team-details',
    loadChildren: () => import('./pages/shift-report/night-patrol-team-details/night-patrol-team-details.module').then( m => m.NightPatrolTeamDetailsPageModule)
  },
  {
    path: 'night-patrol-stop-details',
    loadChildren: () => import('./pages/shift-report/night-patrol-stop-details/night-patrol-stop-details.module').then( m => m.NightPatrolStopDetailsPageModule)
  },
  {
    path: 'night-patrol-material-aid',
    loadChildren: () => import('./pages/shift-report/night-patrol-material-aid/night-patrol-material-aid.module').then( m => m.NightPatrolMaterialAidPageModule)
  },
  {
    path: 'night-patrol-shift-wrap-up',
    loadChildren: () => import('./pages/shift-report/night-patrol-shift-wrap-up/night-patrol-shift-wrap-up.module').then( m => m.NightPatrolShiftWrapUpPageModule)
  },
  {
    path: 'night-patrol-information-referrals',
    loadChildren: () => import('./night-patrol-information-referrals/night-patrol-information-referrals.module').then( m => m.NightPatrolInformationReferralsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

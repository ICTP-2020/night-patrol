import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/userManagement/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/userManagement/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/userManagement/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'shift-report',
    loadChildren: () => import('./pages/report/night-shift-report/shift-report.module').then( m => m.ShiftReportPageModule)
  },
  {
    path: 'night-patrol-stop-details',
    loadChildren: () => import('./pages/report/night-shift-report/night-patrol-stop-details/night-patrol-stop-details.module').then( m => m.NightPatrolStopDetailsPageModule)
  },
  {
    path: 'night-patrol-material-aid',
    loadChildren: () => import('./pages/report/night-shift-report/night-patrol-material-aid/night-patrol-material-aid.module').then( m => m.NightPatrolMaterialAidPageModule)
  },
  {
    path: 'night-patrol-shift-wrap-up',
    loadChildren: () => import('./pages/report/night-shift-report/night-patrol-shift-wrap-up/night-patrol-shift-wrap-up.module').then( m => m.NightPatrolShiftWrapUpPageModule)
  },
  {
    path: 'night-patrol-information-referrals',
    loadChildren: () => import('./pages/report/night-shift-report/night-patrol-information-referrals/night-patrol-information-referrals.module').then( m => m.NightPatrolInformationReferralsPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report-list/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'day-shift-report',
    loadChildren: () => import('./pages/report/day-shift-report/day-shift-report.module').then( m => m.DayShiftReportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

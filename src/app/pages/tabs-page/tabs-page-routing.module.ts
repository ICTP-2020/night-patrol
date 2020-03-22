import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { AvailabilityPage } from '../availability/availability';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'availability',
        children: [
          {
            path: '',
            component: AvailabilityPage,
          }
        ]
      },
      {
        path: 'shifts',
        children: [
          {
            path: '',
            loadChildren: () => import('../shifts/scheduled-shifts/scheduled-shifts.module').then(m => m.ScheduleShiftsModule)
          },
          {
            path: 'shift-detail/:shiftId',
            loadChildren: () => import('../shifts/shift-detail/shift-detail.module').then(m => m.ShiftDetailModule)
          }
        ]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule)
          }
        ]
      },
      {
        path: 'policies',
        children: [
          {
            path: '',
            loadChildren: () => import('../policies/policies.module').then(m => m.PoliciesModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/availability',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }


import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ProfileComponent }   from './profile/profile.component';
import { DashboardComponent }   from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard',        component: DashboardComponent },
  { path: 'dashboard/profile',        component: ProfileComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashBoardRoutingModule {}
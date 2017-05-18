import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DashBoardRoutingModule } from './dashboard-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashBoardRoutingModule
  ],
  declarations: [DashboardComponent, ProfileComponent]
})
export class DashboardModule { }

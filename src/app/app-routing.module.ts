import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './coach/home/home.component';
import { CoachGroupsComponent } from './coach/coach-groups/coach-groups.component';
import { AttendanceComponent } from './coach/attendance/attendance.component';
import { PlayerHomeComponent } from './player/player-home/player-home.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { LoginComponent } from './auth/login/login.component';
import { PlayersManagementComponent } from './manager/players-management/players-management.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: AppComponent},
  {path: 'coach', component: HomeComponent},
  {path: 'coach/schedule', component: CoachGroupsComponent},
  {path: 'coach/attendance', component: AttendanceComponent},
  {path: 'manager/players', component: PlayersManagementComponent},
  {path: 'Player', component: PlayerHomeComponent},
  {path: 'manager', component: ManagerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

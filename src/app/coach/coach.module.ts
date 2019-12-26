import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from '../material.module'
import {SharedModule} from '../shared/shared.module' 
import { RouterModule } from '@angular/router';
import { CoachGroupsComponent } from './coach-groups/coach-groups.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { AttendanceComponent } from './attendance/attendance.component';



@NgModule({
  declarations: [HomeComponent, CoachGroupsComponent, CreateChallengeComponent, AttendanceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  exports:[HomeComponent, CoachGroupsComponent, AttendanceComponent],
  entryComponents: [CreateChallengeComponent]
})
export class CoachModule { }

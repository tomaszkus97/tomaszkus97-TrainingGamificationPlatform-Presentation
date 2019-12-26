import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { PlayersManagementComponent } from './players-management/players-management.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [ManagerHomeComponent, PlayersManagementComponent, CreateGroupComponent, AddUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  exports:[ManagerHomeComponent, PlayersManagementComponent, CreateGroupComponent, AddUserComponent],
  entryComponents:[ CreateGroupComponent, AddUserComponent]
})
export class ManagerModule { }

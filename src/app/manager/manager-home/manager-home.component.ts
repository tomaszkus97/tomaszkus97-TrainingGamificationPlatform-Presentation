import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddUser(){
    const userDialogRef = this.dialog.open(AddUserComponent, {
    });
  }

  openCreateGroup(){
    const groupDialogRef = this.dialog.open(CreateGroupComponent, {
    });
  }

}

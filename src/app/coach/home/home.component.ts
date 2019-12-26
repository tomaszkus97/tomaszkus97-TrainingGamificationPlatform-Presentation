import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateChallengeComponent } from '../create-challenge/create-challenge.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateChallengeComponent, {
      width: '500px',
      height: '500px' 
    });
  }

  ngOnInit() {
    console.log("home init!");
  }

}

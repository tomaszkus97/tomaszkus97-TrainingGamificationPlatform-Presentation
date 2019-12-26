import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CreateChallengeModel } from 'src/app/shared/models/create-challenge.model';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challenge: CreateChallengeModel;

  constructor(public dialogRef: MatDialogRef<CreateChallengeComponent>) { 
    this.challenge = new CreateChallengeModel();
  }

  ngOnInit() {
  }

 

}

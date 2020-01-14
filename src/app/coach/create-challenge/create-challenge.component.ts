import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CreateChallengeModel } from 'src/app/shared/models/create-challenge.model';
import { Apollo } from 'apollo-angular';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import gql from 'graphql-tag';

const CreateChallengeMutation = gql`
  mutation CreateChallenge($model: CreateChallengeModel){
  createChallenge(model: $model){
    code
  }
}`

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challenge: CreateChallengeModel;

  constructor(public dialogRef: MatDialogRef<CreateChallengeComponent>,
     private apollo : Apollo, private snackBar: SnackBarService) { 
    this.challenge = new CreateChallengeModel();
  }

  ngOnInit() {
  }

  onCreateGroup(){
    console.log(this.challenge);
    this.apollo.mutate({
      mutation: CreateChallengeMutation,
      variables:{
        model: this.challenge
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      this.dialogRef.close();
      this.snackBar.openDanger("Something went wrong");
      console.log('there was an error sending the query', error);
    }, () => {
      this.dialogRef.close();
      this.snackBar.openSuccess('Challenge created successfully');
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

 

}

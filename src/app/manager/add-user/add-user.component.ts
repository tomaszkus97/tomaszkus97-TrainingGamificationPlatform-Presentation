import { Component, OnInit } from '@angular/core';
import { RegisterCoachModel } from 'src/app/shared/models/create-coach.model';
import { MatDialogRef } from '@angular/material';
import { RegisterPlayerModel } from 'src/app/shared/models/create-player.model';
import { LevelName } from 'src/app/shared/enums/level.enum';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const RegisterPlayerMutation = gql`
  mutation RegisterPlayer($model: RegisterPlayerModel){
    registerPlayer(model: $model){
    code
  }
}`

const RegisterCoachMutation = gql`
  mutation RegisterCoach($coach: RegisterCoachModel){
  registerCoach(coach: $coach){
    code
  }
}`

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  coach: RegisterCoachModel;
  model: RegisterPlayerModel;
  levels = LevelName;

  constructor(private apollo: Apollo, public dialogRef: MatDialogRef<AddUserComponent>) {
    this.coach = new RegisterCoachModel();
    this.model = new RegisterPlayerModel();
   }

  ngOnInit() {
  }

  onCoachCreate(){
    console.log(this.coach);
    this.apollo.mutate({
      mutation: RegisterCoachMutation,
      variables:{
        coach: this.coach
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    }, () => {
      console.log('coach registered successfully');
    });
  }
  
  onPlayerCreate(){
    console.log(this.model);
    this.apollo.mutate({
      mutation: RegisterPlayerMutation,
      variables:{
        model: this.model
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the mutation', error);
    }, () => {
      console.log('player registered successfully');
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

}

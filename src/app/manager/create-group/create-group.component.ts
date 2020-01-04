import { Component, OnInit } from '@angular/core';
import { DayEnum } from 'src/app/shared/enums/day.enum';
import { LevelName } from 'src/app/shared/enums/level.enum';
import { CreateGroupModel } from 'src/app/shared/models/create-group.model';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { MatDialogRef } from '@angular/material';
import { CreateChallengeComponent } from 'src/app/coach/create-challenge/create-challenge.component';
import { CoachModel } from 'src/app/shared/models/coach-model';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

export type CoachesQueryResponse = {
  coaches: CoachModel[];
}

const CreateGroupMutation = gql`
  mutation CreateGroup($model: CreateGroupModel){
  createGroup(model: $model){
    code
  }
}`

const AllCoachesQuery =gql`
  query GetCoaches{
    coaches{
      id
      name
    }
  }
`

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  days = DayEnum;
  levels = LevelName;
  model: CreateGroupModel;
  allCoaches: CoachModel[];

  constructor(private apollo: Apollo, public dialogRef: MatDialogRef<CreateChallengeComponent>,
    private snackBar: SnackBarService) {
    this.model = new CreateGroupModel();
   }

  onCreateGroup(){
    console.log(this.model);
    this.apollo.mutate({
      mutation: CreateGroupMutation,
      variables:{
        model: this.model
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      this.dialogRef.close();
      this.snackBar.openDanger("Something went wrong");
      console.log('there was an error sending the query', error);
    }, () => {
      this.dialogRef.close();
      this.snackBar.openSuccess('Group created successfully');
    });
  }

  onCoachChange(coachId){
    this.model.coachId = coachId;
  }

  onCancel(){
    this.dialogRef.close();
  }

  ngOnInit() {
    this.apollo.watchQuery<CoachesQueryResponse>({
      query: AllCoachesQuery
    }).valueChanges.subscribe((response) => {
      this.allCoaches = response.data.coaches; 
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { MatDialog } from '@angular/material';
import { PlayerShowcaseComponent } from 'src/app/shared/player-showcase/player-showcase.component';
import { CoachModel } from 'src/app/shared/models/coach-model';

const AllPlayersQuery = gql`
  query GetPlayers {
  players {
    id
    name
    age
    level
    groups{
      name
    }
  }
  coaches{
    id
    name
  }
  groups{
    id
    name
  }
}`

const assignPlayer = gql`
  mutation assignGroup($groupId: String!, $playerId: String!){
    assignGroup(groupId: $groupId, playerId: $playerId){
    code
  }
}
`;

const AllCoachesQuery = gql`
  query GetCoaches {
  coaches {
    id
    name
  }
}`

export interface GroupModel{
  id: String,
  name: String
}

export type MangementQueryResponse = {
  players: Player[];
  coaches: CoachModel[];
  groups: GroupModel[]
}

@Component({
  selector: 'app-players-management',
  templateUrl: './players-management.component.html',
  styleUrls: ['./players-management.component.css']
})
export class PlayersManagementComponent implements OnInit {

  players: Player[] = [
    {
      id:"test-id",
      name:"Player one",
      groups:[
        {name:"Monday 17:00"},
        {name: "Wednesday 19:00"}
      ],
      level:1,
      age: 7
    }
  ]
  coaches: CoachModel[];
  allGroups: GroupModel[];

  displayedColumns = ['name', 'age', 'level', 'groups','assignGroup','profile'];

  constructor(private apollo: Apollo, private dialog: MatDialog) { }

  ngOnInit() {
    this.apollo.watchQuery<MangementQueryResponse>({
      query: AllPlayersQuery
    }).valueChanges.subscribe((response) => {
      this.players = response.data.players;
      this.coaches = response.data.coaches;
      this.allGroups = response.data.groups
    });
  }

  openShowcase(playerId){
    console.log(playerId)
    const userDialogRef = this.dialog.open(PlayerShowcaseComponent, {data: {playerId: playerId}});
  }

  onGroupChange(groupId, playerId){
    console.log(groupId, playerId);
    this.apollo.mutate({
      mutation: assignPlayer,
      variables: {
        groupId: groupId,
        playerId: playerId
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}

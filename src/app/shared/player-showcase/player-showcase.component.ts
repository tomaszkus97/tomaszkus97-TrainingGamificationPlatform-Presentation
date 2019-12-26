import { Component, OnInit, Input, Inject } from '@angular/core';
import { PlayerShowcaseModel } from '../models/player-showcase.model';
import { LevelName } from '../enums/level.enum';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export type Query = {
  player: PlayerShowcaseModel;
}

export interface DialogData {
  playerId: string;
}

const PlayerQuery =  gql`
  query GetPlayer {
  player(id:"44420a8f-ec2c-4ad1-aa2c-57a8624c7b3f") {
    id
    name
    age
    assignedGroups
}}`;

const PlayerByIdQuery =  gql`
  query GetPlayerById($pid: ID!){
  player(id: $pid){
    id
    name
    assignedGroups
    points
    level
  }
}
`;

@Component({
  selector: 'app-player-showcase',
  templateUrl: './player-showcase.component.html',
  styleUrls: ['./player-showcase.component.css']
})
export class PlayerShowcaseComponent implements OnInit {

 @Input() playerId: String;
 player: PlayerShowcaseModel;

  constructor(private apollo: Apollo, public dialogRef: MatDialogRef<PlayerShowcaseComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: DialogData) { }

  ngOnInit() {
    this.apollo
      .watchQuery<Query>({
        query: PlayerByIdQuery,
        variables: {
          pid: this.data.playerId,
        },
      })
      .valueChanges.subscribe(({data}) => {
        this.player = data.player;
      },
      error => {
        console.log(error);
      });
  }

}

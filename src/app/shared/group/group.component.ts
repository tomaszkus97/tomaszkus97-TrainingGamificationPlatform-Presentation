import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../models/group';
import { PlayerPersonalData } from '../models/player-personal-data.model';
import { AttendanceModel, PlayerAttendance } from '../models/attendance.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatDialog } from '@angular/material';
import { PlayerShowcaseComponent } from '../player-showcase/player-showcase.component';

const fillAttendance = gql`
  mutation Attendance($groupId: String!, $date: String!, $attendantPLayers: [String]!){
  attendance(groupId: $groupId, date: $date,
    attendantPlayers: $attendantPLayers){
    code
  }
}
`;


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;

  @Input() displayedColumns: string[];

  players: PlayerAttendance;
  attendance: AttendanceModel;

  constructor(private apollo: Apollo, private dialog: MatDialog) { }

  ngOnInit() {
    this.players = {};
    if(this.group){
    this.group.players.forEach(element => {
      this.players[element.id] = false
  });
  console.log(this.players);
  }}

  openShowcase(playerId){
    console.log(playerId)
    const userDialogRef = this.dialog.open(PlayerShowcaseComponent, {data: {playerId: playerId}});
  }

  fillAttendance(){
    this.attendance = new AttendanceModel();
    this.attendance.attendantPLayers = [];
    this.attendance.date = new Date(Date.now()).toLocaleDateString();
    this.attendance.groupId = this.group.id;
    this.attendance.attendantPLayers = Object.keys(this.players).filter(k => this.players[k]);
    console.log(this.attendance);
    this.apollo.mutate({
      mutation: fillAttendance,
      variables: {
        groupId: this.attendance.groupId,
        date: this.attendance.date,
        attendantPLayers: this.attendance.attendantPLayers
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }
}

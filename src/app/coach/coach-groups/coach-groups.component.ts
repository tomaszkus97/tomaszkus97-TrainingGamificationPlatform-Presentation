import { Component, OnInit } from '@angular/core';
import { DailySchedule } from 'src/app/shared/models/coach-schedule';
import { PlayerPersonalData } from 'src/app/shared/models/player-personal-data.model';
import { Group } from 'src/app/shared/models/group';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

export type Query = {
  coachSchedule: DailySchedule[];
}

@Component({
  selector: 'app-coach-groups',
  templateUrl: './coach-groups.component.html',
  styleUrls: ['./coach-groups.component.css']
})
export class CoachGroupsComponent implements OnInit {

  displayedColumns = [ 'name', 'surname', 'age', 'profile'];
  testSchedule: any[];

  schedule: DailySchedule[] = [
    {
      day:"Monday",
       groups: [
         {
           id:"1",
           day: "Monday",
           hour: "18:00",
           players: [
            {id: "1", name: "Player", surname: "One", age: 7 },
            {id: "2", name: "Player", surname: "Two", age: 8 },
            {id: "3", name: "Player", surname: "Three", age: 6 }
           ]
          },
          {
            id:"1",
            day: "Monday",
            hour: "19:00",
            players: [
             {id: "1", name: "Player", surname: "One", age: 7 },
             {id: "2", name: "Player", surname: "Two", age: 8 }
            ]
           }
        ]
      },
      {
        day:"Wednesday",
         groups: [
           {
            id:"1",
             day: "Wednesday",
             hour: "18:00",
             players: [
              {id: "1", name: "Player", surname: "One", age: 7 },
              {id: "2", name: "Player", surname: "Two", age: 8 },
              {id: "3", name: "Player", surname: "Three", age: 6 }
             ]
            },
            {
              id:"1",
              day: "Wednesday",
              hour: "19:00",
              players: [
               {id: "1", name: "Player", surname: "One", age: 7 },
               {id: "2", name: "Player", surname: "Two", age: 8 }
              ]
             }
          ]
        }
]

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .watchQuery<Query>({
      query: gql`
        {
          coachSchedule(coachId:"CB07D988-5693-4544-A33F-CC80ECB2CEA9"){
    day
    groups{
      day
      name
      players{
        id
        name
      }
    }
  }
        }
      `,
    })
    .valueChanges.subscribe(result => {
      this.testSchedule = result.data.coachSchedule;
      console.log(this.testSchedule);
    }
    );
  }

}

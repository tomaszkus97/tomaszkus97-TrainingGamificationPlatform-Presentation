import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/shared/models/group';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const todayGroupsQuery = gql`{
  todayGroups{
    id
      day
      hour
      name
    players{
      id
     name
     age
    }
  }
}
`
export type Query = {
  todayGroups: Group[];
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  todaysGroups: Group[] = [
    {
      id:"B12341E2-F44B-436C-97CA-799B8A09DD9C",
      day: "Monday",
      hour: "17:00",
      name: "Monday 17:00",
      players: [
       {id: "3FA85F64-5717-4562-B3FC-2C963F66AFA6", name: "Player", surname: "One", age: 7 },
      ]
     },
     {
       id:"",
       day: "Monday",
       hour: "19:00",
       name: "Monday 19:00",
       players: [
        {id: "1", name: "Player", surname: "One", age: 7 },
        {id: "2", name: "Player", surname: "Two", age: 8 }
       ]
      }
   ]

   displayedColumns = ['name','age', 'attendance'];


   constructor(private apollo: Apollo) { }

   ngOnInit() {
     this.apollo
     .watchQuery<Query>({
       query: todayGroupsQuery,
     })
     .valueChanges.subscribe(result => {
       this.todaysGroups = result.data.todayGroups;
       //console.log(result.data.todayGroups);
     }
     );
   }

}

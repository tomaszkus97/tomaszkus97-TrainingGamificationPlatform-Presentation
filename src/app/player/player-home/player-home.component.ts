import { Component, OnInit } from '@angular/core';
import { ChallengeModel } from 'src/app/shared/models/challenge.model';
import { LevelName } from 'src/app/shared/enums/level.enum';
import { PlayerShowcaseModel } from 'src/app/shared/models/player-showcase.model';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-player-home',
  templateUrl: './player-home.component.html',
  styleUrls: ['./player-home.component.css']
})
export class PlayerHomeComponent implements OnInit {

  challenge: ChallengeModel = {
    id:"10",
    title:"Basic footwork drill",
    description:"Your goal is to hit 5 forehands and 5 backhands. Every shot need to be placed in target. After each shot you should run around cone.",
    level: LevelName.Orange,
    points: 25,
    obligatory: true
  }

  player: PlayerShowcaseModel;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

}

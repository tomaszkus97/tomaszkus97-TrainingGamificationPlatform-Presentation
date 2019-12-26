import { Component, OnInit, Input } from '@angular/core';
import { ChallengeModel } from 'src/app/shared/models/challenge.model';


@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  @Input() challenge: ChallengeModel;
  constructor() { }

  ngOnInit() {
  }

}

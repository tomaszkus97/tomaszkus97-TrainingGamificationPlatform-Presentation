import { Component, OnInit, Input } from '@angular/core';
import { ChallengeModel } from '../models/challenge.model';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.css']
})
export class ChallengeItemComponent implements OnInit {

  @Input() challenge: ChallengeModel;

  constructor() { }

  ngOnInit() {
  }

}

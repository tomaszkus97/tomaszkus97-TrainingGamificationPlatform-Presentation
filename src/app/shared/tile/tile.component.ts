import { Component, OnInit, Input } from '@angular/core';
import { mixinColor } from '@angular/material';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() color: string;
  @Input() icon: string;
  @Input() text: string;



  constructor() { }

  ngOnInit() {
  }

  

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import { MaterialModule } from '../material.module';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { LevelComponent } from './level/level.component';



@NgModule({
  declarations: [PlayerHomeComponent, LevelComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [PlayerHomeComponent]
})
export class PlayerModule { }

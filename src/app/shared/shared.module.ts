import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule} from '../material.module'
import {FlexLayoutModule} from '@angular/flex-layout';
import { TileComponent } from './tile/tile.component';
import { GroupComponent } from './group/group.component';
import { FormsModule } from '@angular/forms';
import { PlayerShowcaseComponent } from './player-showcase/player-showcase.component';
import { ChallengeItemComponent } from './challenge-item/challenge-item.component';
import { LevelDirective } from './level.directive';



@NgModule({
  declarations: [NavbarComponent, TileComponent, GroupComponent, PlayerShowcaseComponent, ChallengeItemComponent, LevelDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  entryComponents: [PlayerShowcaseComponent],
  exports: [NavbarComponent, TileComponent, GroupComponent, FormsModule, PlayerShowcaseComponent, ChallengeItemComponent, LevelDirective] 
})
export class SharedModule { }

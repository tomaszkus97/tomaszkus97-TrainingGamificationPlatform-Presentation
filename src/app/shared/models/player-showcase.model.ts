import { PlayerPersonalData } from './player-personal-data.model';
import { Level } from './level.model';
import { Group } from './group';
import { LevelName } from '../enums/level.enum';

export class PlayerShowcaseModel{
    id: string;
    name: string;
    age: number;
    photo: string;
    level: string;
    currentLevel:{
        levelName: LevelName,
        pointsToAdvance: number
    };
    points: number;
    finishedChallenges: string[];
    groupsroups: {
        name: string
    }[];
}
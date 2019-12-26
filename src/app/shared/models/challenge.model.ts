import { Level } from './level.model';
import { LevelName } from '../enums/level.enum';

export class ChallengeModel {
    id: string;
    title: string;
    description: string;
    level: LevelName;
    obligatory: boolean;
    points: number;
}
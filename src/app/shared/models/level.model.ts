import { LevelName } from '../enums/level.enum';
import { ChallengeModel } from './challenge.model';

export class Level{
    name: LevelName;
    photo: string;
    description: string;
    obligatoryChallenges: ChallengeModel[];
    optionalChallenges: ChallengeModel[];
    pointsToAdvance: number;
}
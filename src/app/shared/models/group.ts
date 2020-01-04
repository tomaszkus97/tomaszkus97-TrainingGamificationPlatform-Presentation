import { PlayerPersonalData } from './player-personal-data.model';

export class Group {
    players: PlayerPersonalData[];
    day: string;
    hour: string;
    id: string;
    name: string;
}
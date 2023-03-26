import { Participants } from './Participants';

export interface Tournament {
    readonly id: string;
    name: string;
    organizer: string;
    game: string;
    participants: Participants;
    startDate: string;
}

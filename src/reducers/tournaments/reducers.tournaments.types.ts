import { Tournament } from '../../api/models/Tournament';

export interface TournamentState {
    isLoading: boolean;
    error: Error | null;
    data: Tournament[];
}

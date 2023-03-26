import { TournamentActions } from '../../actions/tournaments/action.tournaments.types';
import { TournamentState } from './reducers.tournaments.types';

export const initialTournamentState: TournamentState = {
    isLoading: false,
    error: null,
    data: [],
};

export default function reducersTournaments(
    state: TournamentState = initialTournamentState,
    action: TournamentActions
): TournamentState {
    switch (action.type) {
        case 'TOURNAMENT_GET_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'TOURNAMENT_POST_REQUEST':
        case 'TOURNAMENT_PATCH_REQUEST':
        case 'TOURNAMENT_DELETE_REQUEST':
            return {
                ...state,
                error: null,
            };
        case 'TOURNAMENT_POST_FAILURE':
        case 'TOURNAMENT_GET_FAILURE':
        case 'TOURNAMENT_PATCH_FAILURE':
        case 'TOURNAMENT_DELETE_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case 'TOURNAMENT_GET_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload,
            };
        case 'TOURNAMENT_PATCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: null,
                data: state.data.map((tournament) =>
                    tournament.id === action.payload.id
                        ? action.payload
                        : tournament
                ),
            };
        case 'TOURNAMENT_DELETE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: null,
                data: state.data.filter(
                    (tournament) => tournament.id !== action.payload.id
                ),
            };
        case 'TOURNAMENT_POST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: null,
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
}

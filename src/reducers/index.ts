import { combineReducers } from 'redux';
import reducersTournaments, {
    initialTournamentState,
} from './tournaments/reducers.tournaments';

const rootReducer = combineReducers({
    tournaments: reducersTournaments,
});

export type RootState = ReturnType<typeof rootReducer>;

export const initialState: RootState = {
    tournaments: initialTournamentState,
};

export default rootReducer;

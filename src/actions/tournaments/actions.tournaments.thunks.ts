import { TournamentPostRequest } from '../../api/models/TournamentPostRequest';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../reducers';
import { Action, Dispatch } from 'redux';
import client from '../../api/client';
import { Tournament } from '../../api/models/Tournament';
import { TournamentGetRequest } from '../../api/models/TournamentGetRequest';
import {
    tournamentDeleteFailure,
    tournamentDeleteRequest,
    tournamentDeleteSuccess,
    tournamentGetFailure,
    tournamentGetRequest,
    tournamentGetSuccess,
    tournamentPatchFailure,
    tournamentPatchRequest,
    tournamentPatchSuccess,
    tournamentPostFailure,
    tournamentPostRequest,
    tournamentPostSuccess,
} from './action.tournaments';

export function tournamentGet(
    request: TournamentGetRequest
): ThunkAction<void, RootState, null, Action<string>> {
    return async function tournamentGetThunk(
        dispatch: Dispatch<Action<string>>,
        getState: () => RootState
    ) {
        dispatch(tournamentGetRequest(request));

        client.tournament
            .getTournaments(request)
            .then((response: Tournament[]) => {
                dispatch(tournamentGetSuccess(response));
            })
            .catch((error: Error) => {
                dispatch(tournamentGetFailure(error));
            });
    };
}

export function tournamentPost(
    request: TournamentPostRequest
): ThunkAction<void, RootState, null, Action<string>> {
    return async function tournamentPostThunk(
        dispatch: Dispatch<Action<string>>,
        getState: () => RootState
    ) {
        dispatch(tournamentPostRequest(request));

        client.tournament
            .postTournament(request)
            .then((response: Tournament) => {
                dispatch(tournamentPostSuccess(response));
            })
            .catch((error: Error) => {
                dispatch(tournamentPostFailure(error));
            });
    };
}

export function tournamentPatch(
    id: string,
    request: TournamentPostRequest
): ThunkAction<void, RootState, null, Action<string>> {
    return async function tournamentPatchThunk(
        dispatch: Dispatch<Action<string>>,
        getState: () => RootState
    ) {
        dispatch(tournamentPatchRequest(request));

        client.tournament
            .patchTournament(id, request)
            .then((response: Tournament) => {
                dispatch(tournamentPatchSuccess(response));
            })
            .catch((error: Error) => {
                dispatch(tournamentPatchFailure(error));
            });
    };
}

export function tournamentDelete(
    id: string
): ThunkAction<void, RootState, null, Action<string>> {
    return async function tournamentDeleteThunk(
        dispatch: Dispatch<Action<string>>,
        getState: () => RootState
    ) {
        dispatch(tournamentDeleteRequest(id));

        client.tournament
            .deleteTournament(id)
            .then(() => {
                dispatch(tournamentDeleteSuccess(id));
            })
            .catch((error: Error) => {
                dispatch(tournamentDeleteFailure(error));
            });
    };
}

// Tournament Get actions & Thunk
import { TournamentGetRequest } from '../../api/models/TournamentGetRequest';
import { Tournament } from '../../api/models/Tournament';
import { TournamentPostRequest } from '../../api/models/TournamentPostRequest';
import {
    TOURNAMENT_DELETE_FAILURE,
    TOURNAMENT_DELETE_REQUEST,
    TOURNAMENT_DELETE_SUCCESS,
    TOURNAMENT_GET_FAILURE,
    TOURNAMENT_GET_REQUEST,
    TOURNAMENT_GET_SUCCESS,
    TOURNAMENT_PATCH_FAILURE,
    TOURNAMENT_PATCH_REQUEST,
    TOURNAMENT_PATCH_SUCCESS,
    TOURNAMENT_POST_FAILURE,
    TOURNAMENT_POST_REQUEST,
    TOURNAMENT_POST_SUCCESS,
    TournamentDeleteFailureAction,
    TournamentDeleteRequestAction,
    TournamentDeleteSuccessAction,
    TournamentGetFailureAction,
    TournamentGetRequestAction,
    TournamentGetSuccessAction,
    TournamentPatchFailureAction,
    TournamentPatchRequestAction,
    TournamentPatchSuccessAction,
    TournamentPostFailureAction,
    TournamentPostRequestAction,
    TournamentPostSuccessAction,
} from './action.tournaments.types';

export const tournamentGetRequest = (
    payload: TournamentGetRequest
): TournamentGetRequestAction => ({
    type: TOURNAMENT_GET_REQUEST,
    error: false,
    payload,
});
export const tournamentGetSuccess = (
    payload: Tournament[]
): TournamentGetSuccessAction => ({
    type: TOURNAMENT_GET_SUCCESS,
    error: false,
    payload,
});
export const tournamentGetFailure = (
    error: Error
): TournamentGetFailureAction => ({
    type: TOURNAMENT_GET_FAILURE,
    error: true,
    payload: error,
});
// Tournament Post actions & Thunk
export const tournamentPostRequest = (
    payload: TournamentPostRequest
): TournamentPostRequestAction => ({
    type: TOURNAMENT_POST_REQUEST,
    error: false,
    payload,
});
export const tournamentPostSuccess = (
    payload: Tournament
): TournamentPostSuccessAction => ({
    type: TOURNAMENT_POST_SUCCESS,
    error: false,
    payload,
});
export const tournamentPostFailure = (
    error: Error
): TournamentPostFailureAction => ({
    type: TOURNAMENT_POST_FAILURE,
    error: true,
    payload: error,
});
// Tournament Patch actions & Thunk
export const tournamentPatchRequest = (
    payload: TournamentPostRequest
): TournamentPatchRequestAction => ({
    type: TOURNAMENT_PATCH_REQUEST,
    error: false,
    payload,
});
export const tournamentPatchSuccess = (
    payload: Tournament
): TournamentPatchSuccessAction => ({
    type: TOURNAMENT_PATCH_SUCCESS,
    error: false,
    payload,
});
export const tournamentPatchFailure = (
    error: Error
): TournamentPatchFailureAction => ({
    type: TOURNAMENT_PATCH_FAILURE,
    error: true,
    payload: error,
});
// Tournament Delete actions & Thunk
export const tournamentDeleteRequest = (
    id: string
): TournamentDeleteRequestAction => ({
    type: TOURNAMENT_DELETE_REQUEST,
    error: false,
    payload: { id },
});
export const tournamentDeleteSuccess = (
    id: string
): TournamentDeleteSuccessAction => ({
    type: TOURNAMENT_DELETE_SUCCESS,
    error: false,
    payload: { id },
});
export const tournamentDeleteFailure = (
    error: Error
): TournamentDeleteFailureAction => ({
    type: TOURNAMENT_DELETE_FAILURE,
    error: true,
    payload: error,
});

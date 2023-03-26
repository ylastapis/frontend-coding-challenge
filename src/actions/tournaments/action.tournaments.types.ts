import { Tournament } from '../../api/models/Tournament';
import { TournamentPostRequest } from '../../api/models/TournamentPostRequest';
import { TournamentGetRequest } from '../../api/models/TournamentGetRequest';
import { ErrorFSAWithPayload, FSAWithPayload } from 'flux-standard-action';

export const TOURNAMENT_GET_REQUEST = 'TOURNAMENT_GET_REQUEST';
export const TOURNAMENT_GET_SUCCESS = 'TOURNAMENT_GET_SUCCESS';
export const TOURNAMENT_GET_FAILURE = 'TOURNAMENT_GET_FAILURE';
export const TOURNAMENT_PATCH_REQUEST = 'TOURNAMENT_PATCH_REQUEST';
export const TOURNAMENT_PATCH_SUCCESS = 'TOURNAMENT_PATCH_SUCCESS';
export const TOURNAMENT_PATCH_FAILURE = 'TOURNAMENT_PATCH_FAILURE';
export const TOURNAMENT_DELETE_REQUEST = 'TOURNAMENT_DELETE_REQUEST';
export const TOURNAMENT_DELETE_SUCCESS = 'TOURNAMENT_DELETE_SUCCESS';
export const TOURNAMENT_DELETE_FAILURE = 'TOURNAMENT_DELETE_FAILURE';
export const TOURNAMENT_POST_REQUEST = 'TOURNAMENT_POST_REQUEST';
export const TOURNAMENT_POST_SUCCESS = 'TOURNAMENT_POST_SUCCESS';
export const TOURNAMENT_POST_FAILURE = 'TOURNAMENT_POST_FAILURE';

export interface TournamentPostRequestAction
    extends FSAWithPayload<
        typeof TOURNAMENT_POST_REQUEST,
        TournamentPostRequest
    > {}

export interface TournamentPostSuccessAction
    extends FSAWithPayload<typeof TOURNAMENT_POST_SUCCESS, Tournament> {}

export interface TournamentPostFailureAction
    extends ErrorFSAWithPayload<typeof TOURNAMENT_POST_FAILURE> {}

export interface TournamentGetRequestAction
    extends FSAWithPayload<
        typeof TOURNAMENT_GET_REQUEST,
        TournamentGetRequest
    > {}

export interface TournamentGetSuccessAction
    extends FSAWithPayload<typeof TOURNAMENT_GET_SUCCESS, Tournament[]> {}

export interface TournamentGetFailureAction
    extends ErrorFSAWithPayload<typeof TOURNAMENT_GET_FAILURE> {}

export interface TournamentPatchRequestAction
    extends FSAWithPayload<
        typeof TOURNAMENT_PATCH_REQUEST,
        TournamentPostRequest
    > {}

export interface TournamentPatchSuccessAction
    extends FSAWithPayload<typeof TOURNAMENT_PATCH_SUCCESS, Tournament> {}

export interface TournamentPatchFailureAction
    extends ErrorFSAWithPayload<typeof TOURNAMENT_PATCH_FAILURE> {}

export interface TournamentDeleteRequestAction
    extends FSAWithPayload<typeof TOURNAMENT_DELETE_REQUEST, { id: string }> {}

export interface TournamentDeleteSuccessAction
    extends FSAWithPayload<typeof TOURNAMENT_DELETE_SUCCESS, { id: string }> {}

export interface TournamentDeleteFailureAction
    extends ErrorFSAWithPayload<typeof TOURNAMENT_DELETE_FAILURE> {}

export type TournamentActions =
    | TournamentPostRequestAction
    | TournamentPostSuccessAction
    | TournamentPostFailureAction
    | TournamentGetRequestAction
    | TournamentGetSuccessAction
    | TournamentGetFailureAction
    | TournamentPatchRequestAction
    | TournamentPatchSuccessAction
    | TournamentPatchFailureAction
    | TournamentDeleteRequestAction
    | TournamentDeleteSuccessAction
    | TournamentDeleteFailureAction;

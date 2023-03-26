import reducersTournaments, {
    initialTournamentState,
} from './reducers.tournaments';

describe('src/reducers/tournaments.ts', () => {
    describe('TOURNAMENT_GET_REQUEST', () => {
        it('should reset error state and move loading state to true', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: Error('error') },
                    {
                        type: 'TOURNAMENT_GET_REQUEST',
                        error: false,
                        payload: {},
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                isLoading: true,
                error: null,
            });
        });
    });
    describe('TOURNAMENT_POST_REQUEST', () => {
        it('should reset error state and keep loading state untouched', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: Error('error') },
                    {
                        type: 'TOURNAMENT_POST_REQUEST',
                        error: false,
                        payload: { name: 'test' },
                    }
                )
            ).toEqual({ ...initialTournamentState, error: null });
        });
    });
    describe('TOURNAMENT_PATCH_REQUEST', () => {
        it('should reset error state and keep loading state untouched', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: Error('error') },
                    {
                        type: 'TOURNAMENT_PATCH_REQUEST',
                        error: false,
                        payload: { name: 'test' },
                    }
                )
            ).toEqual({ ...initialTournamentState, error: null });
        });
    });
    describe('TOURNAMENT_DELETE_REQUEST', () => {
        it('should reset error state and keep loading state untouched', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: Error('error') },
                    {
                        type: 'TOURNAMENT_DELETE_REQUEST',
                        error: false,
                        payload: { id: '1' },
                    }
                )
            ).toEqual({ ...initialTournamentState, error: null });
        });
    });
    describe('TOURNAMENT_POST_FAILURE', () => {
        it('should set error state and update isLoading state to false', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: null, isLoading: true },
                    {
                        type: 'TOURNAMENT_POST_FAILURE',
                        error: true,
                        payload: Error('error'),
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                error: Error('error'),
                isLoading: false,
            });
        });
    });
    describe('TOURNAMENT_GET_FAILURE', () => {
        it('should set error state and update isLoading state to false', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: null, isLoading: true },
                    {
                        type: 'TOURNAMENT_GET_FAILURE',
                        error: true,
                        payload: Error('error'),
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                error: Error('error'),
                isLoading: false,
            });
        });
    });
    describe('TOURNAMENT_PATCH_FAILURE', () => {
        it('should set error state and update isLoading state to false', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: null, isLoading: true },
                    {
                        type: 'TOURNAMENT_PATCH_FAILURE',
                        error: true,
                        payload: Error('error'),
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                error: Error('error'),
                isLoading: false,
            });
        });
    });
    describe('TOURNAMENT_DELETE_FAILURE', () => {
        it('should set error state and update isLoading state to false', () => {
            expect(
                reducersTournaments(
                    { ...initialTournamentState, error: null, isLoading: true },
                    {
                        type: 'TOURNAMENT_DELETE_FAILURE',
                        error: true,
                        payload: Error('error'),
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                error: Error('error'),
                isLoading: false,
            });
        });
    });
    describe('TOURNAMENT_GET_SUCCESS', () => {
        it('should reset error & isLoading state, and set data', () => {
            expect(
                reducersTournaments(
                    {
                        ...initialTournamentState,
                        error: Error('error'),
                        isLoading: true,
                    },
                    {
                        type: 'TOURNAMENT_GET_SUCCESS',
                        error: false,
                        payload: [{ id: '1', name: 'test' } as any],
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                isLoading: false,
                error: null,
                data: [{ id: '1', name: 'test' } as any],
            });
        });
    });
    describe('TOURNAMENT_PATCH_SUCCESS', () => {
        it('should reset error & isLoading state, and set data', () => {
            expect(
                reducersTournaments(
                    {
                        ...initialTournamentState,
                        error: Error('error'),
                        isLoading: true,
                        data: [{ id: '1', name: 'test' } as any],
                    },
                    {
                        type: 'TOURNAMENT_PATCH_SUCCESS',
                        error: false,
                        payload: {
                            id: '1',
                            name: 'test2',
                        } as any,
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                isLoading: false,
                error: null,
                data: [{ id: '1', name: 'test2' } as any],
            });
        });
    });
    describe('TOURNAMENT_DELETE_SUCCESS', () => {
        it('should reset error & isLoading state, and delete', () => {
            expect(
                reducersTournaments(
                    {
                        ...initialTournamentState,
                        error: Error('error'),
                        isLoading: true,
                        data: [{ id: '1', name: 'test' } as any],
                    },
                    {
                        type: 'TOURNAMENT_DELETE_SUCCESS',
                        error: false,
                        payload: {
                            id: '1',
                        } as any,
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                isLoading: false,
                error: null,
                data: [],
            });
        });
    });
    describe('TOURNAMENT_POST_SUCCESS', () => {
        it('should reset error & isLoading state, and add', () => {
            expect(
                reducersTournaments(
                    {
                        ...initialTournamentState,
                        error: Error('error'),
                        isLoading: true,
                        data: [{ id: '1', name: 'test' } as any],
                    },
                    {
                        type: 'TOURNAMENT_POST_SUCCESS',
                        error: false,
                        payload: {
                            id: '2',
                            name: 'test2',
                        } as any,
                    }
                )
            ).toEqual({
                ...initialTournamentState,
                isLoading: false,
                error: null,
                data: [
                    { id: '1', name: 'test' } as any,
                    { id: '2', name: 'test2' } as any,
                ],
            });
        });
    });
    describe('ANY_ACTION', () => {
        it('should do nothing for an unknown action', () => {
            expect(
                reducersTournaments(initialTournamentState, {
                    type: 'UNKNOWN_ACTION',
                } as any)
            ).toEqual(initialTournamentState);
        });
    });
});

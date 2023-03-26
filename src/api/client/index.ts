import {
    deleteTournament,
    getTournaments,
    patchTournament,
    postTournament,
} from './tournament';

const client = {
    tournament: {
        getTournaments,
        postTournament,
        patchTournament,
        deleteTournament,
    },
};

export default client;

// fetchTodoById is the "thunk action creator"
import { Tournament } from '../models/Tournament';
import { TournamentPostRequest } from '../models/TournamentPostRequest';
import { TournamentGetRequest } from '../models/TournamentGetRequest';
import { API_BASE_URL } from '../../constants/api';

export const getTournaments = async (
    request: TournamentGetRequest
): Promise<Tournament[]> => {
    const response = await fetch(
        `${API_BASE_URL}/tournaments?` +
            new URLSearchParams({
                ...(request.q ? { q: request.q } : {}),
            }),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

export const postTournament = async (
    request: TournamentPostRequest
): Promise<Tournament> => {
    const response = await fetch(`${API_BASE_URL}/tournaments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

export const patchTournament = async (
    id: string,
    request: TournamentPostRequest
): Promise<Tournament> => {
    const response = await fetch(`${API_BASE_URL}/tournaments/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

export const deleteTournament = async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/tournaments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
};

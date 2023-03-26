import React from 'react';
import { Tournament } from '../../../api/models/Tournament';
import H6 from '../../atoms/H6';
import styled from 'styled-components';
import theme from '../../../theme';
import Button from '../../atoms/Button';
import { validateTournamentName } from './TournamentCard.utils';
import {
    tournamentDelete,
    tournamentPatch,
} from '../../../actions/tournaments/actions.tournaments.thunks';
import { useDispatch } from 'react-redux';

const TournamentCard = React.memo(function TournamentCard({
    tournament,
}: {
    tournament: Tournament;
}) {
    return (
        <StyledCard className="tournament-card">
            <H6>{tournament.name}</H6>
            <span>Organizer: {tournament.organizer}</span>
            <span>Game: {tournament.game}</span>
            <span>
                Participants: {tournament.participants.current}/
                {tournament.participants.max}
            </span>
            <span>
                Start: {new Date(tournament.startDate).toLocaleString('en-GB')}
            </span>
            <StyledButtons>
                <TournamentCardEditButton tournament={tournament} />
                <TournamentCardDeleteButton tournament={tournament} />
            </StyledButtons>
        </StyledCard>
    );
});

const TournamentCardEditButton = ({
    tournament,
}: {
    tournament: Tournament;
}) => {
    const dispatch = useDispatch();
    const handleEdit = () => {
        const newName = window.prompt('New Tournament Name:', tournament.name);
        if (
            newName &&
            newName !== tournament.name &&
            validateTournamentName(newName)
        ) {
            dispatch(tournamentPatch(tournament.id, { name: newName }));
        }
    };

    return <Button onClick={handleEdit}>Edit</Button>;
};

const TournamentCardDeleteButton = ({
    tournament,
}: {
    tournament: Tournament;
}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        const confirmation = window.confirm(
            'Do you really want to delete this tournament?'
        );
        if (confirmation) {
            dispatch(tournamentDelete(tournament.id));
        }
    };

    return <Button onClick={handleDelete}>Delete</Button>;
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing(4)};
    background-color: ${theme.palette.background.alt1};
    border-radius: 4px;
`;

const StyledButtons = styled.div`
    margin-top: ${theme.spacing(2)};
    & > * + * {
        margin-left: ${theme.spacing(2)};
    }
`;

export default TournamentCard;

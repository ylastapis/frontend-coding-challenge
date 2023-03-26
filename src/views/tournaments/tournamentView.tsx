import styled from 'styled-components';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectTournamentData,
    selectTournamentError,
    selectTournamentIsLoading,
} from '../../selectors/tournaments/selectors.tournaments';
import Container from '../../components/atoms/Container';
import H4 from '../../components/atoms/H4';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import TournamentCard from '../../components/molecules/TournamentCard/TournamentCard';
import Centered from '../../components/atoms/Centered';
import { validateTournamentName } from '../../components/molecules/TournamentCard/TournamentCard.utils';
import theme from '../../theme';
import {
    tournamentGet,
    tournamentPost,
} from '../../actions/tournaments/actions.tournaments.thunks';

export const App = () => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const data = useSelector(selectTournamentData);
    const isLoading = useSelector(selectTournamentIsLoading);
    const error = useSelector(selectTournamentError);

    // add some delay (500ms) before submitting the request
    useEffect(() => {
        let timeout: NodeJS.Timeout = setTimeout(() => {
            dispatch(tournamentGet({ q: name }));
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [dispatch, name]);

    const handleRetry = useCallback(() => {
        dispatch(tournamentGet({ q: name }));
    }, [dispatch, name]);

    return (
        <Container>
            <H4>FACEIT Tournaments</H4>
            <StyledHeader>
                <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search tournaments..."
                />
                <TournamentCreateButton />
            </StyledHeader>
            {error ? (
                <Centered column>
                    {error.message}
                    <br />
                    <Button onClick={handleRetry}>Retry</Button>
                </Centered>
            ) : isLoading ? (
                <Centered>Loading tournaments ...</Centered>
            ) : (
                <>
                    {data.length === 0 ? (
                        <Centered column>No tournaments found</Centered>
                    ) : (
                        <StyledElements>
                            {data.map((item) => (
                                <TournamentCard
                                    key={item.id}
                                    tournament={item}
                                />
                            ))}
                        </StyledElements>
                    )}
                </>
            )}
        </Container>
    );
};

const TournamentCreateButton = () => {
    const dispatch = useDispatch();
    const handleCreate = () => {
        const newName = window.prompt('Tournament Name:', '');
        if (newName && validateTournamentName(newName)) {
            dispatch(tournamentPost({ name: newName }));
        }
    };

    return <Button onClick={handleCreate}>Create tournament</Button>;
};

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledElements = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.spacing(6)};
    margin-top: ${theme.spacing(6)};

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: ${theme.spacing(4)};
    }
`;

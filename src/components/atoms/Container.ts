import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
    max-width: 960px;
    margin-top: ${theme.spacing(6)};
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 960px) {
        padding: ${theme.spacing(2)};
    }
`;

export default Container;

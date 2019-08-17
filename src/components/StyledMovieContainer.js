import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledMMovieContainer = styled.section`
    background: ${props => props.theme.secondaryBg};
    width: 100%;
    height: 100vh;
    padding: 1rem;
    
    ${devices.md`
        width: 640px;
        height: 390px;
        border-radius: 15px;
    `}
`;

export default StyledMMovieContainer;
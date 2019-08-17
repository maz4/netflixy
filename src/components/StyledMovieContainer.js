import styled from 'styled-components';
import { devices } from '../utils/styledUtils';

const StyledMMovieContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    background: ${props => props.theme.secondaryBg};
    
    ${devices.md`
        width: 640px;
        height: 390px;
        border-radius: 15px;
    `}
`;

export default StyledMMovieContainer;
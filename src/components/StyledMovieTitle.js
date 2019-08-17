import styled from 'styled-components';

const StyledMovieTitle = styled.div`
    width: ${props => props.theme.posterWidth};
    margin-bottom: 4px;
    font-size: 1rem;
    color: #525661;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export default StyledMovieTitle;
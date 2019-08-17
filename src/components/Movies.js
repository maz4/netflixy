import React, {Fragment} from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import StyledHeader from './StyledHeader';
import StyledHeaderTitle from './StyledHeaderTitle';
import StyledHorizontalScroll from './StyledHorizontalScroll';
import Movie from './Movie';
import { movies } from '../staticData';


const Movies = () => {
    return (
        <Fragment>
            <StyledHeader>
                <FontAwesomeIcon icon="bars" text="help" />
                <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
                <FontAwesomeIcon icon="search" />
            </StyledHeader>
            <StyledHorizontalScroll>
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        name={movie.name}
                        poster={movie.poster}
                        duration={movie.duration}
                        year={movie.year}
                    />
                ))}
            </StyledHorizontalScroll>
        </Fragment>
    );
};

export default Movies;
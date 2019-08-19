import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Movies from '../components/Movies';
import { getMovies } from '../actions/moviesActions';
import { GET_MOVIE } from '../constants/labels';

const MoviesContainer = props => <Movies {...props} />

const mapStateToProps = state => ({
    movies: _.values(state.movies),
    loading: state.isLoading[GET_MOVIE]
});

export default connect(mapStateToProps, { getMovies })(MoviesContainer);

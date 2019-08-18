import {createAction} from 'redux-actions';
import { apiPayloadCreator } from '../utils/apiUtils';
import { API } from '../constants/actionTypes';
import { normalize, schema } from 'normalizr';
import { SET_MOVIES } from '../constants/actionTypes';
const getMoviesAC = createAction(API, apiPayloadCreator);

function setMovies(movies) {
    const movieSchema = new schema.Entity("movies");
    const movieListSchema = new schema.Array(movieSchema);
    const normalizedData = normalize(movies, movieListSchema);
    return {
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
}

export const getMovies = () => getMoviesAC({url:"vcvx0", onSuccess: setMovies});
import { handleActions } from 'redux-actions';
import { GET_MOVIE } from '../constants/actionTypes';

export default handleActions({
    [GET_MOVIE]: (state, action) => state
}, {});
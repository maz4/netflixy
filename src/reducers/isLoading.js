import { handleActions } from 'redux-actions';
import  produce from 'immer';
import { API_START, API_END} from '../constants/actionTypes';
import { GET_MOVIE } from '../constants/labels';

export default handleActions({
    [API_START]: produce((state, action) => {
        if(action.payload === GET_MOVIE){
            state[GET_MOVIE] = true;
        }
    }),
    [API_END]: produce((state, action) => {
        if(action.payload === GET_MOVIE){
            state[GET_MOVIE] = false;
        }
    })
}, {});
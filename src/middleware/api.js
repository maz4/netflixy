import axios from 'axios';
import { API } from '../constants/actionTypes';
import { apiStart, apiEnd } from '../actions/apiActions';

//axios default settings
axios.defaults.baseURL = "https://api.myjson.com/bins/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${"fakeAccessToken"}`;

const api = ({dispatch}) => next => action => {

    next(action);

    if(action.type !== API){
        return;
    }

    const {url, method, data, onSuccess, onFailure, label} = action.payload;
    const dataOrParams = ["GET", "POST"].includes(method) ? "params" : "data";

    //below the horn - api request has started
    if(label){
        dispatch(apiStart(label));
    }

    //make actual request
    axios.request({
        url,
        method,
        [dataOrParams]: data
    })
        .then(({data}) => {
            dispatch(onSuccess(data));
        })
        .catch( error => {
            dispatch(onFailure(error));
        })
        .finally( () => {
            if(label) {
                dispatch(apiEnd(label));
            }
        });
};

export default api;
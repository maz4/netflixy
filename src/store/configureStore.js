import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers/index';

const configureStore = initialState => {
    const store = createStore(rootReducer, initialState applyMiddleware(logger, api));

    if(module.hot){
        //Enable webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }
    return store;
}

export default configureStore;
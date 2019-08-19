import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import api from '../middleware/api';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';

const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger, api),
            DevTools.instrument()
            )
        );

    if (module.hot) {
        //Enable webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }
    const persiststore = persistStore(store);
    return {store, persiststore};
}

export default configureStore;
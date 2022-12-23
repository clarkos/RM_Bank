import { applyMiddleware, configureStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const store = configureStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;

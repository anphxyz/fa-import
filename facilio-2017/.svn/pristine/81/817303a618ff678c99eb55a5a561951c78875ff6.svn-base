import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

export const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
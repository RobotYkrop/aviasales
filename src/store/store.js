import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ticketsReducer } from './ticketsReducer/ticketsReducer';

const rootReducer = combineReducers({
  ticketsReducer: ticketsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

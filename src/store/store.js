import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { errorsReducer } from './ticketsReducer/errorsReducer';
import { ticketsReducer } from './ticketsReducer/ticketsReducer';

const rootReducer = combineReducers({
  ticketsReducer: ticketsReducer,
  errorsReducer: errorsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

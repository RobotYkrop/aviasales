import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { filterReducer } from './filterReducer/filterReducer';
import { sortReducer } from './sortReducer/sortReducer';
import { ticketsReducer } from './ticketsReducer/ticketsReducer';

const rootReducer = combineReducers({
  filterReducer: filterReducer,
  sortReducer: sortReducer,
  ticketsReducer: ticketsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

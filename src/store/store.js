import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ticketsReducer } from './ticketsReducer/ticketsReducer';

export const store = createStore(ticketsReducer, composeWithDevTools(applyMiddleware(thunk)));

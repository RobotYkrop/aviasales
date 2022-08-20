import { mapDuration } from '../../components/utilites/convertNum';

export const defaultState = {
  tickets: [],
  numShowTicket: 5,
  stop: false,
  allTicket: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
  searchId: null,
};

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };
    case 'LIST_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
      };
    case 'LIST_STOPS':
      return {
        ...state,
        stop: action.payload,
      };
    case 'CURRENT_TICKETS':
      return { ...state, numShowTicket: state.numShowTicket + 5 };
    case 'LOW_PRICE_CASE':
      return {
        ...state,
        tickets: state.tickets.slice().sort((prev, next) => (prev.price > next.price ? 1 : -1)),
      };
    case 'SPEED_AVIA_CASE':
      return {
        ...state,
        tickets: state.tickets.slice().sort((prev, next) => (mapDuration(prev) > mapDuration(next) ? 1 : -1)),
      };
    case 'OPTIMAL':
      return {
        ...state,
        tickets: state.tickets
          .slice()
          .sort((prev, next) => (mapDuration(prev) + prev.price > mapDuration(next) + next.price ? 1 : -1)),
      };
    case 'ALL_TRANSFERS_CASE':
      return {
        ...state,
        allTicket: !state.allTicket,
        noTransfer: !state.allTicket,
        oneTransfer: !state.allTicket,
        twoTransfer: !state.allTicket,
        threeTransfer: !state.allTicket,
      };
    case 'NO_TRANSFERS_CASE':
      return {
        ...state,
        noTransfer: !state.noTransfer,
      };
    case 'ONE_TRANSFERS_CASE':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
      };
    case 'TWO_TRANSFERS_CASE':
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
      };
    case 'THREE_TRANSFERS_CASE':
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
      };
    case 'ALL_TICKET_TRUE':
      return { ...state, allTicket: true };
    case 'ALL_TICKET_FALSE':
      return { ...state, allTicket: false };
    default:
      return state;
  }
};

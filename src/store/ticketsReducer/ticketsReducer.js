export const defaultState = {
  tickets: [],
  numShowTicket: 5,
  stop: false,
  allTicket: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
  sortPrice: null,
  sortOptimal: null,
  sortSpeed: null,
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
        sortPrice: [...state.tickets],
        sortSpeed: null,
        sortOptimal: null,
      };
    case 'SPEED_AVIA_CASE':
      return {
        ...state,
        sortSpeed: [...state.tickets],
        sortPrice: null,
        sortOptimal: null,
      };
    case 'OPTIMAL':
      return {
        ...state,
        sortOptimal: [...state.tickets],
        sortSpeed: null,
        sortPrice: null,
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

const defaultState = {
  tickets: [],
  numShowTicket: 5,
};

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_TICKETS':
      return {
        ...state,
        tickets: [...action.payload.tickets],
      };
    case 'CURRENT_TICKETS':
      return { ...state, numShowTicket: state.numShowTicket + 5 };
    default:
      return state;
  }
};

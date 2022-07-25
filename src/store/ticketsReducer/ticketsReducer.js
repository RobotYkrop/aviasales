const defaultState = {
  tickets: [],
};

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LIST_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    default:
      return state;
  }
};

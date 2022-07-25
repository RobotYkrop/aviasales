const defaultState = {
  allTicket: false,
};

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'allTicketCase':
      return {
        allTicket: !state.allTicket,
      };
    default:
      return state;
  }
};

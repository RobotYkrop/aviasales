// export const defaultStateFilter = {
//   allTicket: true,
//   noTransfer: true,
//   oneTransfer: true,
//   twoTransfer: true,
//   threeTransfer: true,
// };

// export const filterReducer = (state = defaultStateFilter, action) => {
//   switch (action.type) {
//     case 'allTicketCase':
//       return {
//         allTicket: !state.allTicket,
//         noTransfer: !state.allTicket,
//         oneTransfer: !state.allTicket,
//         twoTransfer: !state.allTicket,
//         threeTransfer: !state.allTicket,
//       };
//     case 'noTransfersCase':
//       return { ...state, noTransfer: !state.noTransfer };
//     case 'oneTransfersCase':
//       return { ...state, oneTransfer: !state.oneTransfer };
//     case 'twoTransfersCase':
//       return { ...state, twoTransfer: !state.twoTransfer };
//     case 'threeTransfersCase':
//       return { ...state, threeTransfer: !state.threeTransfer };
//     case 'ticketTrue':
//       return { ...state, allTicket: true };
//     case 'ticketFalse':
//       return { ...state, allTicket: false };
//     default:
//       return state;
//   }
// };

import { mapDuration } from '../../components/utilites/convertNum';

export const defaultState = {
  tickets: [],
  arrFilter: [],
  numShowTicket: 5,
  stop: false,
  allTicket: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};
// Хотел разделить редьюсер, но не получается стейт редьюсера соединить с другими стейтами других редьюсеров
export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
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
        tickets: [...state.tickets.sort((prev, next) => (prev.price > next.price ? 1 : -1))],
      };
    case 'SPEED_AVIA_CASE':
      return {
        ...state,
        tickets: [...state.tickets.sort((prev, next) => (mapDuration(prev) > mapDuration(next) ? 1 : -1))],
      };
    case 'OPTIMAL':
      return {
        ...state,
        tickets: [
          ...state.tickets.sort((prev, next) =>
            mapDuration(prev) + prev.price > mapDuration(next) + next.price ? 1 : -1
          ),
        ],
      };
    case 'allTicketCase':
      return {
        ...state,
        allTicket: !state.allTicket,
        noTransfer: !state.allTicket,
        oneTransfer: !state.allTicket,
        twoTransfer: !state.allTicket,
        threeTransfer: !state.allTicket,
      };
    case 'noTransfersCase':
      return {
        ...state,
        noTransfer: !state.noTransfer,
      };
    case 'oneTransfersCase':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
      };
    case 'twoTransfersCase':
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
      };
    case 'threeTransfersCase':
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
      };
    case 'ticketTrue':
      return { ...state, allTicket: true };
    case 'ticketFalse':
      return { ...state, allTicket: false };
    default:
      return state;
  }
};

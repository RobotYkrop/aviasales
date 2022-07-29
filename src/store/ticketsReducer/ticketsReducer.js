import { mapDuration } from '../../components/utilites/convertNum';

export const defaultState = {
  tickets: [],
  arrFilter: [],
  numShowTicket: 5,
  stop: false,
  showAllTickets: true,
  allTicket: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};
console.log(defaultState.filterValue);
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
      console.log(state.arrFilter);
      return {
        ...state,
        noTransfer: !state.noTransfer,
      };
    case 'oneTransfersCase':
      console.log(state.filterValue);
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
      };
    case 'twoTransfersCase':
      console.log(state.filterValue);
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
      };
    case 'threeTransfersCase':
      console.log(state.filterValue);
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
      };
    case 'ticketTrue':
      return { ...state, allTicket: true };
    case 'ticketFalse':
      return { ...state, allTicket: false };
    case 'Filter':
      if (action.payload.isChecked) {
        return { ...state, arrFilter: [...state.arrFilter, state.arrFilter.push(action.payload.filterValue)] };
      } else {
        console.log(state.arrFilter);
        return { ...state, arrFilter: [...state.arrFilter.filter((item) => item !== action.payload.filterValue)] };
      }
    case 'switchFilterAll':
      return { ...state, showAllTickets: action.payload };
    default:
      return state;
  }
};

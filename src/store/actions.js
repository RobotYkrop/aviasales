// Actions для фильтра
export const noTran = (payload) => ({ type: 'NO_TRANSFERS_CASE', payload });
export const oneTran = (payload) => ({ type: 'ONE_TRANSFERS_CASE', payload });
export const twoTran = (payload) => ({ type: 'TWO_TRANSFERS_CASE', payload });
export const threeTran = (payload) => ({ type: 'THREE_TRANSFERS_CASE', payload });
export const allTick = (payload) => ({ type: 'ALL_TRANSFERS_CASE', payload });
export const ticketTrue = (payload) => ({ type: 'ALL_TICKET_TRUE', payload });
export const ticketFalse = (payload) => ({ type: 'ALL_TICKET_FALSE', payload });
// Actions для массива билетов
export const tickets = (payload) => ({ type: 'LIST_TICKETS', payload });
export const stop = (payload) => ({ type: 'LIST_STOPS', payload });
export const showMoreTicket = (payload) => ({ type: 'CURRENT_TICKETS', payload });
// Actions для сортировки\
export const lowPrice = (payload) => ({ type: 'LOW_PRICE_CASE', payload });
export const speedAvia = (payload) => ({ type: 'SPEED_AVIA_CASE', payload });
export const optimale = (payload) => ({ type: 'OPTIMAL', payload });
// Actions для ошибки
export const setError = (payload) => ({ type: 'SET_ERROR', payload });
export const setErrorEnternet = (payload) => ({ type: 'SET_ERROR_ENTERNET', payload });

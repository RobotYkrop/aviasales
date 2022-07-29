// Actions для фильтра
export const noTran = (payload) => payload({ type: 'noTransfersCase', payload });
export const oneTran = (payload) => payload({ type: 'oneTransfersCase', payload });
export const twoTran = (payload) => payload({ type: 'twoTransfersCase', payload });
export const threeTran = (payload) => payload({ type: 'threeTransfersCase', payload });
export const allTick = (payload) => payload({ type: 'allTicketCase', payload });
export const ticketTrue = (payload) => payload({ type: 'ticketTrue', payload });
export const ticketFalse = (payload) => payload({ type: 'ticketFalse', payload });
export const filter = (payload) => ({ type: 'Filter', payload });
export const switchFilterAll = (payload) => ({ type: 'switchFilterAll', payload });
// Actions для массива билетов
export const tickets = (payload) => ({ type: 'LIST_TICKETS', payload });
export const stop = (payload) => ({ type: 'LIST_STOPS', payload });
export const showMoreTicket = (payload) => ({ type: 'CURRENT_TICKETS', payload });
// Actions для сортировки\
export const lowPrice = (payload) => ({ type: 'LOW_PRICE_CASE', payload });
export const speedAvia = (payload) => ({ type: 'SPEED_AVIA_CASE', payload });
export const optimale = (payload) => ({ type: 'OPTIMAL', payload });

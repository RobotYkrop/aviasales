// export const sortReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOW_PRICE_CASE':
//       console.log(state);
//       return {
//         ...state,
//         tickets: [...state.tickets.sort((previous, next) => (previous.price > next.price ? 1 : -1))],
//       };
//     case 'SPEED_AVIA_CASE':
//       return {
//         class: 'avia-up',
//         fn: (a, b) => a.net_worth - b.net_worth,
//       };
//     case 'OPTIMAL':
//       return {
//         class: 'optimal',
//         fn: (a, b) => a.net_worth - b.net_worth,
//       };
//     default:
//       return state;
//   }
// };

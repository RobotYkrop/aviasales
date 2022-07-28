// import { tickets } from '../../store/actions';

// export const fetchSearchId = () => async (dispatch) => {
//   try {
//     const res = await fetch('https://aviasales-test-api.kata.academy/search');
//     if (!res.ok) {
//       throw new Error(`${res.status}`);
//     }
//     const arr = await res.json();
//     console.log(arr.searchId);
//     try {
//       const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${arr.searchId}`);
//       console.log(res);
//       if (res.status === 502 || res.status === 500) {
//         await dispatch();
//       } else if (res.status !== 200) {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       } else {
//         let part = await res.json();
//         dispatch(tickets(part));
//         if (!part.stop) {
//           await dispatch();
//         } else {
//           console.log(tickets);
//         }
//       }
//     } catch (err) {
//       return Error(err);
//     }
//   } catch (err) {
//     return Error(err);
//   }
// };

// export const fetchSearchId = () => {
//   return (dispatch) => {
//     return fetchId().then(([response, json]) => {
//       if (response.status === 200) {
//         dispatch(tickets(json));
//       }
//     });
//   };
// };

// const fetchId = () => {
//   const URL = 'https://aviasales-test-api.kata.academy/search';
//   fetch(URL).then((response) =>
//     Promise.all([response, response.json(), response.searchId])
//       .then((res) => `https://aviasales-test-api.kata.academy/tickets?searchId=${res}`)
//       .then((response) => Promise.all([response, response.json()]))
//   );
// };

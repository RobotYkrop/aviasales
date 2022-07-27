import { tickets } from '../../store/actions';

export const fetchSearchId = () => {
  return async function (dispatch) {
    try {
      const res = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      const arr = await res.json();
      console.log(arr.searchId);
      try {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${arr.searchId}`);
        console.log(res);
        const tt = await res.json();
        console.log(tt);
        return dispatch(tickets(tt));
      } catch (err) {
        return Error(err);
      }
    } catch (err) {
      return Error(err);
    }
  };
};

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { searchId, setError, setErrorEnternet, stop, tickets } from '../../store/actions';
import * as selectors from '../../store/selectors';

const fetchSearch = () => async (dispatch) => {
  try {
    await fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => dispatch(searchId(res.searchId)));
  } catch (e) {
    dispatch(setError(true));
  }
};

export const fetchSearchId = () => async (dispatch) => {
  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);
  const search = useSelector(selectors.search);
  if (search) {
    try {
      const subscribe = async () => {
        try {
          let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${search}`);
          if (res.status === 502 || res.status === 500) {
            await subscribe();
          } else if (res.status !== 200) {
            dispatch(setError(true));
          } else {
            let part = await res.json();
            dispatch(tickets(part));
            dispatch(stop(part.stop));
            if (!part.stop) {
              await subscribe();
            }
          }
        } catch (e) {
          dispatch(setErrorEnternet(true));
        }
      };
      subscribe();
    } catch (e) {
      dispatch(setError(true));
    }
  }
};

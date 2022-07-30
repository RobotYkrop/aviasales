import { useEffect, useState } from 'react';

import { stop, tickets } from '../../store/actions';

export const fetchSearchId = () => async (dispatch) => {
  const [searchId, setSearchId] = useState();
  useEffect(() => {
    try {
      fetch('https://aviasales-test-api.kata.academy/search')
        .then((res) => res.json())
        .then((res) => {
          setSearchId(res.searchId);
        });
    } catch (e) {
      throw new Error(e.message);
    }
  }, []);
  useEffect(() => {
    if (searchId) {
      try {
        const subscribe = async () => {
          let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
          if (res.status === 502 || res.status === 500) {
            await subscribe();
          } else if (res.status !== 200) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            await subscribe();
          } else {
            let part = await res.json();
            dispatch(tickets(part));
            dispatch(stop(part.stop));
            if (!part.stop) {
              await subscribe();
            }
          }
        };
        subscribe();
      } catch (e) {
        throw new Error(e.message);
      }
    }
  }, [searchId]);
};

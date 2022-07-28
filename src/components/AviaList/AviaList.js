import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';

import { showMoreTicket } from '../../store/actions';
import * as store from '../../store/store';
import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const AviaList = () => {
  const listTickets = useSelector((state) => state.ticketsReducer.tickets);
  const numShowTicket = useSelector((state) => state.ticketsReducer.numShowTicket);
  const [searchId, setSearchId] = useState();
  const [tickets, setTickets] = useState([]);
  console.log(listTickets);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSearchId(res.searchId);
      });
  }, []);
  useEffect(() => {
    if (searchId) {
      const subscribe = async () => {
        let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        if (res.status === 502 || res.status === 500) {
          await subscribe();
        } else if (res.status !== 200) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await subscribe();
        } else {
          let part = await res.json();
          console.log(part);
          setTickets([...tickets, part]);
          console.log(tickets);
          if (!part.stop) {
            await subscribe();
          } else {
            console.log(tickets);
          }
        }
      };
      subscribe();
    }
  }, [searchId]);

  if (listTickets.length === 0) {
    return <Spin tip="Loading..." />;
  } else {
    return (
      <div className={list['list_ticket']}>
        {listTickets.slice(0, numShowTicket).map((item) => {
          return <AviaItem {...item} key={uuid()} />;
        })}
        {(listTickets.length >= numShowTicket && (
          <button type="button" className={list['showMoreTicket']} onClick={() => dispatch(showMoreTicket())}>
            Показать еще 5 билетов!
          </button>
        )) || <Spin tip="Loading..." />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { ...state.ticketsReducer };
};

export default connect(mapStateToProps, store)(AviaList);

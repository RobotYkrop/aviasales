import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';

import { showMoreTicket } from '../../store/actions';
import * as store from '../../store/store';
import { fetchSearchId } from '../AviaApi/AviaApi';
import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const AviaList = () => {
  const listTickets = useSelector((state) => state.ticketsReducer.tickets);
  const numShowTicket = useSelector((state) => state.ticketsReducer.numShowTicket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  return (
    <ul className={list['list_ticket']}>
      {listTickets.slice(0, numShowTicket).map((item) => {
        return (
          <li key={uuid()}>
            <AviaItem {...item} />
          </li>
        );
      })}
      {listTickets.length >= numShowTicket && (
        <button type="button" className={list['showMoreTicket']} onClick={() => dispatch(showMoreTicket())}>
          Показать еще 5 билетов!
        </button>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(AviaList);

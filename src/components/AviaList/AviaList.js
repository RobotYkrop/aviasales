import { Spin } from 'antd';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';
import { useCallback } from 'react';

import { showMoreTicket } from '../../store/actions';
import { fetchSearchId } from '../AviaApi/AviaApi';
import * as store from '../../store/store';
import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const AviaList = () => {
  const [allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer, listTickets, numShowTicket, listStops] =
    useSelector((state) => [
      state.ticketsReducer.allTicket,
      state.ticketsReducer.noTransfer,
      state.ticketsReducer.oneTransfer,
      state.ticketsReducer.twoTransfer,
      state.ticketsReducer.threeTransfer,
      state.ticketsReducer.tickets,
      state.ticketsReducer.numShowTicket,
      state.ticketsReducer.stop,
    ]);

  const filtered = useCallback((arrTicket) => {
    return arrTicket.filter((currentValue) => {
      if (allTicket) {
        return currentValue;
      }
      if (
        (noTransfer && currentValue.segments[0].stops.length === 0 && currentValue.segments[1].stops.length === 0) ||
        (oneTransfer && currentValue.segments[0].stops.length === 1 && currentValue.segments[1].stops.length === 1) ||
        (twoTransfer && currentValue.segments[0].stops.length === 2 && currentValue.segments[1].stops.length === 2) ||
        (threeTransfer && currentValue.segments[0].stops.length === 3 && currentValue.segments[1].stops.length === 3)
      )
        return true;
      return false;
    });
  });

  const arr = filtered(listTickets);

  const loader = listStops === false ? <Spin tip="Loading..." /> : false;
  const dispatch = useDispatch();
  dispatch(fetchSearchId());
  if (arr.length === 0) {
    return <Spin tip="Loading..." />;
  } else {
    return (
      <div className={list['list_ticket']}>
        {loader}
        {arr.slice(0, numShowTicket).map((item) => {
          return <AviaItem {...item} key={uuid()} />;
        })}
        {arr.length >= numShowTicket && (
          <button type="button" className={list['showMoreTicket']} onClick={() => dispatch(showMoreTicket())}>
            Показать еще 5 билетов!
          </button>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { ...state.ticketsReducer };
};

export default connect(mapStateToProps, store)(AviaList);

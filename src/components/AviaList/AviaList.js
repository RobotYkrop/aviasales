import { Spin } from 'antd';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';

import { showMoreTicket } from '../../store/actions';
import { fetchSearchId } from '../AviaApi/AviaApi';
import * as store from '../../store/store';
import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const getNumOfStop = (ticket) =>
  ticket.segments
    .map((element) => element.stops.length)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const filterTicketByTransfer = (ticket, showAllTickets, valueFilterTransfer) => {
  if (!showAllTickets) {
    return valueFilterTransfer.includes(getNumOfStop(ticket));
  }
  return true;
};

const AviaList = () => {
  const listTickets = useSelector((state) => state.ticketsReducer.tickets);
  const numShowTicket = useSelector((state) => state.ticketsReducer.numShowTicket);
  const listStops = useSelector((state) => state.ticketsReducer.stop);
  const showAllTickets = useSelector((state) => state.ticketsReducer.showAllTickets);
  const valueFilterTransfer = useSelector((state) => state.ticketsReducer.arrFilter);

  const ticketsFilter = listTickets.filter((item) => filterTicketByTransfer(item, showAllTickets, valueFilterTransfer));
  const loader = listStops === false ? <Spin tip="Loading..." /> : false;
  const dispatch = useDispatch();
  dispatch(fetchSearchId());
  if (ticketsFilter.length === 0 && valueFilterTransfer === []) {
    return <Spin tip="Loading..." />;
  } else {
    return (
      <div className={list['list_ticket']}>
        {loader}
        {ticketsFilter.slice(0, numShowTicket).map((item) => {
          return <AviaItem {...item} key={uuid()} />;
        })}
        {ticketsFilter.length >= numShowTicket && (
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

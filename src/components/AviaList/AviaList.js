import { Spin, Alert } from 'antd';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';
import { useCallback } from 'react';

import { showMoreTicket } from '../../store/actions';
import { fetchSearchId } from '../AviaApi/AviaApi';
import * as store from '../../store/store';
import AviaItem from '../AviaItem/AviaItem';
import { mapDuration } from '../utilites/convertNum';

import list from './AviaList.module.scss';

const AviaList = () => {
  const dispatch = useDispatch();
  const [
    isError,
    allTicket,
    noTransfer,
    oneTransfer,
    twoTransfer,
    threeTransfer,
    listTickets,
    numShowTicket,
    listStops,
    sortPrice,
    sortSpeed,
    sortOptimal,
  ] = useSelector((state) => [
    state.ticketsReducer.isError,
    state.ticketsReducer.allTicket,
    state.ticketsReducer.noTransfer,
    state.ticketsReducer.oneTransfer,
    state.ticketsReducer.twoTransfer,
    state.ticketsReducer.threeTransfer,
    state.ticketsReducer.tickets,
    state.ticketsReducer.numShowTicket,
    state.ticketsReducer.stop,
    state.ticketsReducer.sortPrice,
    state.ticketsReducer.sortSpeed,
    state.ticketsReducer.sortOptimal,
  ]);
  console.log(listTickets);
  const filteredAndSorted = useCallback((arrTicket) => {
    // Сделал сортировку по дефолту, но если не надо ее, то могу убрать
    // switch (listTickets) {
    //   case sortPrice:
    //     listTickets.sort((prev, next) => (prev.price > next.price ? 1 : -1));
    //     break;
    //   case sortSpeed:
    //     listTickets.sort((prev, next) => (mapDuration(prev) > mapDuration(next) ? 1 : -1));
    //     break;
    //   case sortOptimal:
    //     listTickets.sort((prev, next) => (mapDuration(prev) + prev.price > mapDuration(next) + next.price ? 1 : -1));
    //     break;

    //   default:
    //     break;
    // }
    if (sortPrice) {
      return arrTicket.sort((prev, next) => (prev.price > next.price ? 1 : -1));
    } else if (sortSpeed) {
      return arrTicket.sort((prev, next) => (mapDuration(prev) > mapDuration(next) ? 1 : -1));
    } else if (sortOptimal) {
      return arrTicket.sort((prev, next) => (mapDuration(prev) + prev.price > mapDuration(next) + next.price ? 1 : -1));
    }
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

  const arr = filteredAndSorted(listTickets);

  dispatch(fetchSearchId());
  return (
    <div>
      {!listStops && !isError && (
        <div className={list['loader']}>
          <Spin tip="Loading..." />
        </div>
      )}
      {isError && <Alert message="Alert! Alert! Alert!" description="Problems...." type="info" />}
      <div className={list['list_ticket']}>
        {arr.slice(0, numShowTicket).map((item) => {
          return <AviaItem {...item} key={uuid()} />;
        })}
        {arr.length >= numShowTicket && (
          <button type="button" className={list['showMoreTicket']} onClick={() => dispatch(showMoreTicket())}>
            Показать еще 5 билетов!
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.ticketsReducer };
};

export default connect(mapStateToProps, store)(AviaList);

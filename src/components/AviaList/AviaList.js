import { Spin, Alert } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showMoreTicket } from '../../store/actions';
import { AviaItem } from '../AviaItem/AviaItem';
import { mapDuration } from '../utilites/convertNum';
import * as selectors from '../../store/selectors';

import list from './AviaList.module.scss';

const AviaList = () => {
  const dispatch = useDispatch();
  const allTicket = useSelector(selectors.allTicket);
  const noTransfer = useSelector(selectors.noTransfer);
  const oneTransfer = useSelector(selectors.oneTransfer);
  const twoTransfer = useSelector(selectors.twoTransfer);
  const threeTransfer = useSelector(selectors.threeTransfer);
  const numShowTicket = useSelector(selectors.numShowTicket);
  const stop = useSelector(selectors.stop);
  const tickets = useSelector(selectors.tickets);
  const sortPrice = useSelector(selectors.sortPrice);
  const sortSpeed = useSelector(selectors.sortSpeed);
  const sortOptimal = useSelector(selectors.sortOptimal);

  const isErrorEnternet = useSelector(selectors.isErrorEnternet);
  const isError = useSelector(selectors.isError);

  const filtered = (arrTicket) => {
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
  };

  const sorted = (arr) => {
    if (sortPrice) {
      return arr.sort((prev, next) => (prev.price > next.price ? 1 : -1));
    } else if (sortSpeed) {
      return arr.sort((prev, next) => (mapDuration(prev) > mapDuration(next) ? 1 : -1));
    } else if (sortOptimal) {
      return arr.sort((prev, next) => (mapDuration(prev) + prev.price > mapDuration(next) + next.price ? 1 : -1));
    }
    if (!sortPrice && !sortPrice && !sortOptimal) {
      return arr;
    }
  };

  const arr = filtered(sorted(tickets));

  console.log(arr);
  return (
    <div>
      {!stop && !isError && !isErrorEnternet && (
        <div className={list['loader']}>
          <Spin tip="Loading..." />
        </div>
      )}
      {isErrorEnternet && (
        <Alert
          message="Внимание!"
          description="Возникла проблема с подключением к сети Интернет, проверьте подключение и попробуйте еще раз."
          type="info"
        />
      )}
      {isError && <Alert message="Alert! Alert! Alert!" description="Problems...." type="info" />}
      <div className={list['list_ticket']}>
        {arr.slice(0, numShowTicket).map((item, i) => {
          return <AviaItem {...item} key={i} />;
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

export default AviaList;

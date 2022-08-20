import { Spin, Alert } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { showMoreTicket } from '../../store/actions';
import { AviaItem } from '../AviaItem/AviaItem';
import * as selectors from '../../store/selectors';

import list from './AviaList.module.scss';

const AviaList = React.memo(function AviaList() {
  const dispatch = useDispatch();

  const allTicket = useSelector(selectors.allTicket);
  const noTransfer = useSelector(selectors.noTransfer);
  const oneTransfer = useSelector(selectors.oneTransfer);
  const twoTransfer = useSelector(selectors.twoTransfer);
  const threeTransfer = useSelector(selectors.threeTransfer);
  const numShowTicket = useSelector(selectors.numShowTicket);
  const stop = useSelector(selectors.stop);
  const tickets = useSelector(selectors.tickets);

  const isErrorEnternet = useSelector(selectors.isErrorEnternet);
  const isError = useSelector(selectors.isError);

  const filtered = useCallback(
    (arrTicket) => {
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
    },
    [allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer]
  );

  const arr = filtered(tickets);

  console.log(arr);
  return (
    <div>
      {!stop && !isError && !isErrorEnternet && (
        <div className={list['loader']}>
          <Spin tip="Loading..." />
        </div>
      )}
      {isErrorEnternet && (
        <Alert message="Внимание!" description="Возникла проблема с подключением к сети Интернет." type="info" />
      )}
      {isError && <Alert message="Alert! Alert! Alert!" description="Проблемы...одни проблемы..." type="info" />}
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
});

export default AviaList;

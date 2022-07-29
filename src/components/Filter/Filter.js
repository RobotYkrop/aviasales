import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import * as action from '../../store/actions';
import * as store from '../../store/store';

import classes from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const noTransfer = useSelector((state) => state.ticketsReducer.noTransfer);
  const oneTransfer = useSelector((state) => state.ticketsReducer.oneTransfer);
  const twoTransfer = useSelector((state) => state.ticketsReducer.twoTransfer);
  const threeTransfer = useSelector((state) => state.ticketsReducer.threeTransfer);
  const allTicket = useSelector((state) => state.ticketsReducer.allTicket);

  useEffect(() => {
    dispatch(action.switchFilterAll(allTicket));
  }, [dispatch, allTicket]);

  useEffect(() => {
    dispatch(action.filter({ isChecked: noTransfer, filterValue: 1 }));
  }, [noTransfer, dispatch]);

  useEffect(() => {
    dispatch(action.filter({ isChecked: oneTransfer, filterValue: 2 }));
  }, [oneTransfer, dispatch]);

  useEffect(() => {
    dispatch(action.filter({ isChecked: twoTransfer, filterValue: 3 }));
  }, [twoTransfer, dispatch]);

  useEffect(() => {
    dispatch(action.filter({ isChecked: threeTransfer, filterValue: 4 }));
  }, [threeTransfer, dispatch]);

  useEffect(() => {
    if (noTransfer && oneTransfer && twoTransfer && threeTransfer) {
      action.ticketTrue(dispatch);
    } else {
      action.ticketFalse(dispatch);
    }
  }, [noTransfer, oneTransfer, twoTransfer, threeTransfer]);
  return (
    <section className={classes.filters}>
      <form className={classes['form']}>
        <h3 className={classes['title']}>Количество пересадок</h3>
        <ul className={classes['list_filter']}>
          <li className={classes['filters-item']}>
            <input
              onChange={() => action.allTick(dispatch)}
              checked={allTicket}
              id="all"
              name="all"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="all" className={classes['text-style']}>
              Все
            </label>
          </li>
          <li className={classes['filters-item']}>
            <input
              onChange={() => action.noTran(dispatch)}
              checked={noTransfer}
              id="no-transfers"
              name="noTransfers"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="no-transfers" className={classes['text-style']}>
              Без пересадок
            </label>
          </li>
          <li className={classes['filters-item']}>
            <input
              onChange={() => action.oneTran(dispatch)}
              checked={oneTransfer}
              id="1-transfers"
              name="oneTransfers"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="1-transfers" className={classes['text-style']}>
              1 пересадка
            </label>
          </li>
          <li className={classes['filters-item']}>
            <input
              onChange={() => action.twoTran(dispatch)}
              checked={twoTransfer}
              id="2-transfers"
              name="twoTransfers"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="2-transfers" className={classes['text-style']}>
              2 пересадка
            </label>
          </li>
          <li className={classes['filters-item']}>
            <input
              onChange={() => action.threeTran(dispatch)}
              checked={threeTransfer}
              id="3-transfers"
              name="threeTransfers"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="3-transfers" className={classes['text-style']}>
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(Filter);

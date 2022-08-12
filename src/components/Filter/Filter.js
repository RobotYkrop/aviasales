import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import * as action from '../../store/actions';
import * as store from '../../store/store';

import classes from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const [allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer] = useSelector((state) => [
    state.ticketsReducer.allTicket,
    state.ticketsReducer.noTransfer,
    state.ticketsReducer.oneTransfer,
    state.ticketsReducer.twoTransfer,
    state.ticketsReducer.threeTransfer,
  ]);

  useEffect(() => {
    noTransfer && oneTransfer && twoTransfer && threeTransfer
      ? dispatch(action.ticketTrue(allTicket))
      : dispatch(action.ticketFalse(allTicket));
  }, [noTransfer, oneTransfer, twoTransfer, threeTransfer]);
  return (
    <section className={classes.filters}>
      <form className={classes['form']}>
        <h3 className={classes['title']}>Количество пересадок</h3>
        <ul className={classes['list_filter']}>
          <li className={classes['filters-item']}>
            <input
              onChange={() => dispatch(action.allTick(allTicket))}
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
              onChange={() => console.log(dispatch(action.noTran(noTransfer)))}
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
              onChange={() => dispatch(action.oneTran(oneTransfer))}
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
              onChange={() => dispatch(action.twoTran(twoTransfer))}
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
              onChange={() => dispatch(action.threeTran(threeTransfer))}
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
  const { allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer } = state.ticketsReducer;
  return {
    allTicket: allTicket,
    noTransfer: noTransfer,
    oneTransfer: oneTransfer,
    twoTransfer: twoTransfer,
    threeTransfer: threeTransfer,
  };
};

export default connect(mapStateToProps, store)(Filter);

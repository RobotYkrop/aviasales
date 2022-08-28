import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../../store/actions';
import * as selectors from '../../store/selectors';

import classes from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const allTicket = useSelector(selectors.allTicket);
  const noTransfer = useSelector(selectors.noTransfer);
  const oneTransfer = useSelector(selectors.oneTransfer);
  const twoTransfer = useSelector(selectors.twoTransfer);
  const threeTransfer = useSelector(selectors.threeTransfer);

  useMemo(() => {
    noTransfer && oneTransfer && twoTransfer && threeTransfer
      ? dispatch(action.ticketTrue(allTicket))
      : dispatch(action.ticketFalse(allTicket));
  }, [dispatch, allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer]);
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
              <span>Все</span>
            </label>
          </li>
          <li className={classes['filters-item']}>
            <input
              onChange={() => dispatch(action.noTran(noTransfer))}
              checked={noTransfer}
              id="no-transfers"
              name="noTransfers"
              type={'checkbox'}
              className={classes['custom-checkbox']}
            />
            <label htmlFor="no-transfers" className={classes['text-style']}>
              <span>Без пересадок</span>
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
              <span>1 пересадка</span>
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
              <span>2 пересадка</span>
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
              <span>3 пересадки</span>
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Filter;

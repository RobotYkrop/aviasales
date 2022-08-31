import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import Filter from '../Filter/Filter';
import Header from '../tabs/tabs';
import logo from '../assets/Logo.svg';
import { fetchSearchId } from '../AviaApi/AviaApi';
import AviaList from '../AviaList/AviaList';
import * as selectors from '../../store/selectors';

import 'antd/dist/antd.min.css';
import classes from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const allTicket = useSelector(selectors.allTicket);
  const noTransfer = useSelector(selectors.noTransfer);
  const oneTransfer = useSelector(selectors.oneTransfer);
  const twoTransfer = useSelector(selectors.twoTransfer);
  const threeTransfer = useSelector(selectors.threeTransfer);
  dispatch(fetchSearchId());
  const notFound =
    allTicket === false &&
    noTransfer === false &&
    oneTransfer === false &&
    twoTransfer === false &&
    threeTransfer === false ? (
      <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />
    ) : (
      <AviaList />
    );
  return (
    <div className={classes.App}>
      <img src={logo} alt={'logo'} />
      <div className={classes['container']}>
        <Filter />
        <section className={classes['content']}>
          <Header />
          {notFound}
        </section>
      </div>
    </div>
  );
};

export default App;

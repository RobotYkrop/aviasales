import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import Filter from '../Filter/Filter';
import Header from '../tabs/tabs';
import logo from '../assets/Logo.svg';
import { fetchSearchId } from '../AviaApi/AviaApi';
import AviaList from '../AviaList/AviaList';

import 'antd/dist/antd.min.css';
import classes from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer } = useSelector(
    (state) => state.ticketsReducer
  );
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
      <img src={logo} />
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

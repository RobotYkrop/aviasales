import { Empty } from 'antd';
import { useSelector } from 'react-redux';

import AviaList from '../AviaList/AviaList';
import Filter from '../Filter/Filter';
import Header from '../tabs/tabs';

import 'antd/dist/antd.min.css';
import classes from './App.module.scss';

const App = () => {
  const [allTicket, noTransfer, oneTransfer, twoTransfer, threeTransfer] = useSelector((state) => [
    state.ticketsReducer.allTicket,
    state.ticketsReducer.noTransfer,
    state.ticketsReducer.oneTransfer,
    state.ticketsReducer.twoTransfer,
    state.ticketsReducer.threeTransfer,
  ]);
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

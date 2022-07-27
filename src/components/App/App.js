import AviaList from '../AviaList/AviaList';
import Filter from '../Filter/Filter';
import Header from '../tabs/tabs';

import 'antd/dist/antd.min.css';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.container}>
      <Filter />
      <section className={classes['content']}>
        <Header />
        <AviaList />
      </section>
    </div>
  );
};

export default App;

import AviaList from '../AviaList/AviaList';
import Filter from '../Filter/Filter';
import Header from '../header_filter/tabs';

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

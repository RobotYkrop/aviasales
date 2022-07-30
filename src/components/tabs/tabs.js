import { useDispatch, connect } from 'react-redux';
import { Button } from 'antd';

import { lowPrice, optimale, speedAvia } from '../../store/actions';
import { store } from '../../store/store';

import tabs from './tabs.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className={tabs.tabs}>
      <Button size="large" type="primary" onClick={() => dispatch(lowPrice())} className={tabs['tabs_items']}>
        Самый дешевый
      </Button>
      <Button size="large" type="primary" onClick={() => dispatch(speedAvia())} className={tabs['tabs_items']}>
        Самый быстрый
      </Button>
      <Button size="large" type="primary" onClick={() => dispatch(optimale())} className={tabs['tabs_items']}>
        Оптимальный
      </Button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(Header);

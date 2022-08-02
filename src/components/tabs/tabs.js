import { useDispatch, connect } from 'react-redux';
import { Button } from 'antd';

import { lowPrice, optimale, speedAvia } from '../../store/actions';
import { store } from '../../store/store';

import tabs from './tabs.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className={tabs.tabs}>
      <Button size="large" type="default" onClick={() => dispatch(lowPrice())} className={tabs['items']}>
        Самый дешевый
      </Button>
      <Button size="large" type="default" onClick={() => dispatch(speedAvia())} className={tabs['items']}>
        Самый быстрый
      </Button>
      <Button size="large" type="default" onClick={() => dispatch(optimale())} className={tabs['items']}>
        Оптимальный
      </Button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(Header);

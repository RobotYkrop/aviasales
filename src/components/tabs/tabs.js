import { useDispatch, connect } from 'react-redux';

import { lowPrice, optimale, speedAvia } from '../../store/actions';
import { store } from '../../store/store';

import tabs from './tabs.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className={tabs.tabs}>
      <button onClick={() => dispatch(lowPrice())} className={tabs['tabs_items']}>
        Самый дешевый
      </button>
      <button onClick={() => dispatch(speedAvia())} className={tabs['tabs_items']}>
        Самый быстрый
      </button>
      <button onClick={() => dispatch(optimale())} className={tabs['tabs_items']}>
        Оптимальный
      </button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(Header);

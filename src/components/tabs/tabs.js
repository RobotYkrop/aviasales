import { useDispatch, connect, useSelector } from 'react-redux';
import { Button } from 'antd';

import { lowPrice, optimale, speedAvia } from '../../store/actions';
import { store } from '../../store/store';

import tabs from './tabs.module.scss';

const Header = () => {
  const [sortPrice, sortSpeed, sortOptimal] = useSelector((state) => [
    state.ticketsReducer.sortPrice,
    state.ticketsReducer.sortSpeed,
    state.ticketsReducer.sortOptimal,
  ]);
  const dispatch = useDispatch();
  return (
    <section className={tabs.tabs}>
      <Button
        size="large"
        onClick={() => dispatch(lowPrice(sortPrice))}
        className={sortPrice ? tabs['active'] : tabs['']}
      >
        Самый дешевый
      </Button>
      <Button
        size="large"
        type="default"
        onClick={() => dispatch(speedAvia(sortSpeed))}
        className={sortSpeed ? tabs['active'] : tabs['']}
      >
        Самый быстрый
      </Button>
      <Button
        size="large"
        type="default"
        onClick={() => dispatch(optimale(sortOptimal))}
        className={sortOptimal ? tabs['active'] : tabs['']}
      >
        Оптимальный
      </Button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(Header);

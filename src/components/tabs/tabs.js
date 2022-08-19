import { useDispatch, useSelector } from 'react-redux';

import { lowPrice, optimale, speedAvia } from '../../store/actions';
import * as selectors from '../../store/selectors';

import tabs from './tabs.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const sortPrice = useSelector(selectors.sortPrice);
  const sortSpeed = useSelector(selectors.sortSpeed);
  const sortOptimal = useSelector(selectors.sortOptimal);
  return (
    <section className={tabs.tabs}>
      <button onClick={() => dispatch(lowPrice(sortPrice))} className={sortPrice ? tabs['active'] : tabs['']}>
        Самый дешевый
      </button>
      <button onClick={() => dispatch(speedAvia(sortSpeed))} className={sortSpeed ? tabs['active'] : tabs['']}>
        Самый быстрый
      </button>
      <button onClick={() => dispatch(optimale(sortOptimal))} className={sortOptimal ? tabs['active'] : tabs['']}>
        Оптимальный
      </button>
    </section>
  );
};

export default Header;

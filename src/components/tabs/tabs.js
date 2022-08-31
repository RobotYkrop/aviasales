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
      {/* <input id="price" name="sort" type="radio" onChange={() => console.log(dispatch(lowPrice()))} />
      <label htmlFor="price">Самый дешевый</label>
      <input id="speed" name="sort" type="radio" onChange={() => dispatch(speedAvia())} />
      <label htmlFor="speed">Самый быстрый</label>
      <input id="optimale" name="sort" type="radio" onChange={() => dispatch(optimale())} />
      <label htmlFor="optimale">Оптимальный</label> */}
      <button onClick={() => dispatch(lowPrice())} className={sortPrice ? tabs['active'] : tabs['']}>
        Самый дешевый
      </button>
      <button onClick={() => dispatch(speedAvia())} className={sortSpeed ? tabs['active'] : tabs['']}>
        Самый быстрый
      </button>
      <button onClick={() => dispatch(optimale())} className={sortOptimal ? tabs['active'] : tabs['']}>
        Оптимальный
      </button>
    </section>
  );
};

export default Header;

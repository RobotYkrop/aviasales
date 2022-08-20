import { useDispatch } from 'react-redux';

import { lowPrice, optimale, speedAvia } from '../../store/actions';

import tabs from './tabs.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className={tabs.tabs}>
      <input id="price" name="sort" type="radio" onChange={() => dispatch(lowPrice())} />
      <label htmlFor="price">Самый дешевый</label>
      <input id="speed" name="sort" type="radio" onChange={() => dispatch(speedAvia())} />
      <label htmlFor="speed">Самый быстрый</label>
      <input id="optimale" name="sort" type="radio" onChange={() => dispatch(optimale())} />
      <label htmlFor="optimale">Оптимальный</label>
    </section>
  );
};

export default Header;

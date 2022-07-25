import tabs from './tabs.module.scss';

const Header = () => {
  return (
    <section className={tabs.tabs}>
      <button className={tabs['tabs_items']}>Самый дешевый</button>
      <button className={tabs['tabs_items']}>Самый быстрый</button>
      <button className={tabs['tabs_items']}>Оптимальный</button>
    </section>
  );
};

export default Header;

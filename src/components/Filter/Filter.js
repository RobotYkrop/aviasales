import classes from './Filter.module.scss';

const Filter = () => {
  return (
    <section className={classes.filters}>
      <form className={classes['form']}>
        <h3 className={classes['title']}>Количество пересадок</h3>
        <ul className={classes['list_filter']}>
          <li className={classes['list_item']}>
            <input id="all" name="all" type={'checkbox'} className={classes['custom-checkbox']} />
            <label htmlFor="all" className={classes['text-style']}>
              Все
            </label>
          </li>
          <li className={classes['list_item']}>
            <input id="no-transfers" name="no-transfers" type={'checkbox'} className={classes['custom-checkbox']} />
            <label htmlFor="no-transfers" className={classes['text-style']}>
              Без пересадок
            </label>
          </li>
          <li className={classes['list_item']}>
            <input id="1-transfers" name="1-transfers" type={'checkbox'} className={classes['custom-checkbox']} />
            <label htmlFor="1-transfers" className={classes['text-style']}>
              1 пересадка
            </label>
          </li>
          <li className={classes['list_item']}>
            <input id="2-transfers" name="2-transfers" type={'checkbox'} className={classes['custom-checkbox']} />
            <label htmlFor="2-transfers" className={classes['text-style']}>
              2 пересадка
            </label>
          </li>
          <li className={classes['list_item']}>
            <input id="3-transfers" name="3-transfers" type={'checkbox'} className={classes['custom-checkbox']} />
            <label htmlFor="3-transfers" className={classes['text-style']}>
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default Filter;

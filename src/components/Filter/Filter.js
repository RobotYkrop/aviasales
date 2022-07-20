import classes from './Filter.module.scss';

const Filter = () => {
  return (
    <section className={classes.filters}>
      <form className={classes['form-filters']}>
        <h3 className={classes['filter-title']}>Количество пересадок</h3>
        <input id="all" name="all" type={'checkbox'} className={classes['custom-checkbox']} />
        <label htmlFor="all" className={classes['text-style']}>
          Все
        </label>
        <label className={classes['text-style']}>
          <input type={'checkbox'} className={classes['checkbox-style']} />
          Без пересадок
        </label>
        <label className={classes['text-style']}>
          <input type={'checkbox'} className={classes['checkbox-style']} />1 пересадка
        </label>
        <label className={classes['text-style']}>
          <input type={'checkbox'} className={classes['checkbox-style']} />2 пересадка
        </label>
        <label className={classes['text-style']}>
          <input type={'checkbox'} className={classes['checkbox-style']} />3 пересадки
        </label>
      </form>
    </section>
  );
};

export default Filter;

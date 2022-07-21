import items from './AviaItems.module.scss';

const AviaItem = () => {
  return (
    <section>
      <ul className={items.list_avia_ticket}>
        <div></div>
        <li className={items['avia_price']}>
          <span>13 000 Р</span>
        </li>
        <li className={items['avia_logo']}>
          <span>Лого</span>
        </li>
        <div className={items['avia_city_time']}>
          <li>
            <span>MOW-HKT</span>
            <span>10:45-08:00</span>
          </li>
          <li>
            <span>MOW-HKT</span>
            <span>10:45-08:00</span>
          </li>
        </div>
        <div className={items['avia_wait']}>
          <li>
            <span>В пути</span>
            <span>10:45-08:00</span>
          </li>
          <li>
            <span>В пути</span>
            <span>10:45-08:00</span>
          </li>
        </div>
        <div className={items['avia_transfer']}>
          <li>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </li>
          <li>
            <span>1 пересадка</span>
            <span>hkg</span>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default AviaItem;

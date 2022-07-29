import uuid from 'react-uuid';

import { convertDate, getTravelTime } from '../utilites/convertDate';
import { groupNums } from '../utilites/convertNum';

import items from './AviaItems.module.scss';

const AviaItem = ({ price, carrier, segments }) => {
  const textPrice = groupNums(price);
  return (
    <ul className={items['list_avia_ticket']}>
      <div></div>
      <li className={items['avia_price']}>{textPrice} р</li>
      <img className={items['avia_logo']} alt={carrier} src={`//pics.avs.io/99/36/${carrier}.png`} />
      {segments.map((item) => {
        const { date, origin, duration, stops } = item;
        let CONVERT_DATE = convertDate(date);
        let CONVERT_TRAVEL_TIME = getTravelTime(duration);
        return (
          <div className={items['segments']} key={uuid()}>
            <li className={items['avia_city_time']}>
              <span>{origin}</span>
              <span>{CONVERT_DATE}</span>
            </li>
            <li className={items['avia_wait']}>
              <span>В ПУТИ</span>
              <span>{CONVERT_TRAVEL_TIME}</span>
            </li>
            <li className={items['avia_transfer']}>
              <span>{stops.length} ПЕРЕСАДКИ</span>
              <span>{stops.map((item) => item).join(' ')}</span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};
export default AviaItem;

import uuid from 'react-uuid';

import { convertDate, getTravelTime } from '../utilites/convertDate';
import { groupNums, enumerate } from '../utilites/convertNum';

import items from './AviaItems.module.scss';

const AviaItem = ({ price, carrier, segments }) => {
  const textPrice = groupNums(price);
  return (
    <ul className={items['list_avia_ticket']}>
      <div className={items['price_logo']}>
        <li className={items['avia_price']}>{textPrice} р</li>
        <img className={items['avia_logo']} alt={carrier} src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((item) => {
        const { date, origin, duration, stops, destination } = item;
        let CONVERT_DATE = convertDate(date);
        let CONVERT_TRAVEL_TIME = getTravelTime(duration);
        let stop = enumerate(stops.length);
        return (
          <ul className={items['segments']} key={uuid()}>
            <li className={items['text']}>
              {origin} - {destination}
            </li>
            <li className={items['text']}>В ПУТИ</li>
            <li className={items['text']}>{stop}</li>
            <li className={items['time-text']}>{CONVERT_DATE}</li>
            <li className={items['time-text']}>{CONVERT_TRAVEL_TIME}</li>
            <li className={items['time-text']}>{stops.map((item) => item).join(' ')}</li>
          </ul>
        );
      })}
    </ul>
  );
};
export default AviaItem;

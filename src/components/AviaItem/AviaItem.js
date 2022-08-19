import React from 'react';
import uuid from 'react-uuid';

import { convertDate, getTravelTime } from '../utilites/convertDate';
import { enumerate } from '../utilites/convertNum';

import items from './AviaItems.module.scss';

export const AviaItem = ({ price, carrier, segments }) => {
  return (
    <ul className={items['list_avia_ticket']}>
      <div className={items['price_logo']}>
        <li className={items['avia_price']}>{price.toLocaleString()} р</li>
        <img className={items['avia_logo']} alt={carrier} src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((item) => {
        const { date, origin, duration, stops, destination } = item;
        return (
          <ul className={items['segments']} key={uuid()}>
            <li className={items['text']}>
              {origin} - {destination}
            </li>
            <li className={items['text']}>В ПУТИ</li>
            <li className={items['text']}>{enumerate(stops.length)}</li>
            <li className={items['time-text']}>{convertDate(date)}</li>
            <li className={items['time-text']}>{getTravelTime(duration)}</li>
            <li className={items['time-text']}>{stops.map((item) => item).join(' ')}</li>
          </ul>
        );
      })}
    </ul>
  );
};
export default AviaItem;

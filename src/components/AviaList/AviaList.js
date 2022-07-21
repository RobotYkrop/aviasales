import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const AviaList = () => {
  return (
    <ul className={list.list_ticket}>
      <AviaItem />
    </ul>
  );
};

export default AviaList;

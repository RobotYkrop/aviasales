import AviaItem from '../AviaItem/AviaItem';
import filters from '../Filter/Filter.module.scss';

const AviaList = () => {
  return (
    <ul className={filters.list_filter}>
      <AviaItem />
    </ul>
  );
};

export default AviaList;

import { Spin } from 'antd';
import { useSelector, useDispatch, connect } from 'react-redux';
import uuid from 'react-uuid';

import { showMoreTicket } from '../../store/actions';
import * as store from '../../store/store';
import { fetchSearchId } from '../AviaApi/AviaApi';
import AviaItem from '../AviaItem/AviaItem';

import list from './AviaList.module.scss';

const AviaList = () => {
  const listTickets = useSelector((state) => state.ticketsReducer.tickets);
  const numShowTicket = useSelector((state) => state.ticketsReducer.numShowTicket);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSearchId());
  // }, []);
  if (listTickets.length === 0) {
    return <Spin tip="Loading..." />;
  } else {
    return (
      <div className={list['list_ticket']}>
        {listTickets.slice(0, numShowTicket).map((item) => {
          return <AviaItem {...item} key={uuid()} />;
        })}
        {(listTickets.length >= numShowTicket &&
          ((
            <button
              type="button"
              className={list['showMoreTicket']}
              onClick={() => dispatch(showMoreTicket(), dispatch(fetchSearchId()))}
            >
              Показать еще 5 билетов!
            </button>
          ) ?? <Spin tip="Loading..." />)) || <Spin tip="Loading..." />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state.ticketsReducer;
};

export default connect(mapStateToProps, store)(AviaList);

export const mapDuration = (ticket) =>
  ticket.segments.map((element) => element.duration).reduce((prevValue, curValue) => prevValue + curValue, 0);

export const enumerate = (val) => {
  switch (val) {
    case 1:
      return 'ПЕРЕСАДКА';
    case 2:
      return '2 ПЕРЕСАДКИ';
    case 3:
      return '3 ПЕРЕСАДКИ';
    case 4:
      return '4 ПЕРЕСАДКИ';
    default:
      return 'БЕЗ ПЕРЕСАДОК';
  }
};

export const convertDate = (date) => {
  let conver = new Date(date);
  let hours = conver.getUTCHours();
  let minutes = conver.getUTCMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const getTravelTime = (duration) => {
  const hours = Math.trunc(duration / 60);
  const min = duration % 60;
  return `${hours < 10 ? `0${hours}` : hours}ч ${min < 10 ? `0${min}` : min}м`;
};

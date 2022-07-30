export const groupNums = (function () {
  let r = /(\d{3})/g;
  return function (text) {
    return text.toString().split('').reverse().join('').replace(r, '$1 ').split('').reverse().join('');
  };
})();

export const mapDuration = (ticket) =>
  ticket.segments.map((element) => element.duration).reduce((prevValue, curValue) => prevValue + curValue, 0);

export const declOfNum = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

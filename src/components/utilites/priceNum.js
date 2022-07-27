export const groupNums = (function () {
  let r = /(\d{3})/g;
  return function (text) {
    return text.toString().split('').reverse().join('').replace(r, '$1 ').split('').reverse().join('');
  };
})();

module.exports = function reverse (n) {
  let res = Math.abs(n).toString().split('');
  return Number(res.reverse().join(''));
};

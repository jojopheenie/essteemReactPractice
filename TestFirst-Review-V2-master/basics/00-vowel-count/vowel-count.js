/* eslint-disable no-unused-vars */

function vowelsCount(str) {
  str = str.toLowerCase().split('');
  return str.reduce(
    (curr, next) => {
      if ('aeiou'.includes(next)) {
        curr[next]++;
        curr['total']++;
      }

      return curr;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 }
  );
}

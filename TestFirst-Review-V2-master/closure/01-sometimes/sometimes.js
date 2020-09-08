/* eslint-disable no-unused-vars */
const sometimes = (func) => {
  let callCount = 1;
  return function () {
    if (callCount <= 3) {
      callCount++;
      return func(...arguments);
    }
    if (callCount % 2 === 1) {
      callCount++;
      return func(...arguments);
    }
    callCount++;
    return 'I do not know!';
  };
};

const sometimes = (fn) => {
  let i = 0;
  return function () {
    if (++i >= 4 && i % 2 === 0) {
      return 'I do not know!';
    }
    return fn.apply(null, arguments);
  };
};

const interleave = (...strs) => {
  const longestStringLength = strs.reduce((longest, str) => {
    if (str.length > longest) {
      return str.length;
    } else {
      return longest;
    }
  }, 0);
  let interleavedString = '';
  for (let i = 0; i < longestStringLength; i++) {
    strs.forEach((str) => {
      if (str[i]) {
        interleavedString += str[i];
      }
    });
  }
  return interleavedString;
};

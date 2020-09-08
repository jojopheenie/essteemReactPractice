/* eslint-disable no-unused-vars */

const multipleMaps = (input, maps) => {
  return input.map((key) => {
    for (const map of maps) {
      if (key in map) return map[key];
    }

    return key;
  });
};

const numberMap = multipleMaps(
  [1, 2, 3, 4],
  [
    { 1: '!', 2: '@' },
    { 3: '#', 4: '$' },
  ]
);
const characterMap = multipleMaps(
  ['a', 'b', 'c', 'd'],
  [{ a: 0, b: 1 }, { c: 2 }, { d: 3 }]
);

expect(numberMap).toEqual(['!', '@', '#', '$']);
expect(characterMap).toEqual([0, 1, 2, 3]);

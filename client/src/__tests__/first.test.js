const sum = (a, b) => {
  return a + b;
};
it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(2);
  expect(sum(2, 2)).toEqual(4);
});

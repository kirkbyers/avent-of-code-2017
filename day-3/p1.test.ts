import { distanceToCenter } from './p1';

it('should return 0 w/ inp of 1', () => {
  expect(distanceToCenter(1)).toEqual(0);
});
it('should return 3 w/ inp of 12', () => {
  expect(distanceToCenter(12)).toEqual(3);
});
it('should return 2 w/ inp of 23', () => {
  expect(distanceToCenter(23)).toEqual(2);
});
it('should return 31 w/ inp of 1024', () => {
  expect(distanceToCenter(1024)).toEqual(31);
});
it('should return w/ inp of 325489', (done) => {
  console.log(distanceToCenter(325489));
  done();
});

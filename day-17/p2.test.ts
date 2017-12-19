import { spin2 } from './spin';

it('returns 1222153 from stepSize 3', () => {
  const result = spin2(3);
  expect(result).toEqual(1222153);
});

it('returns 6154117 from stepSize 314', () => {
  const result = spin2(314);
  expect(result).toEqual(6154117);
});

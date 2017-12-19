import { spin } from './spin';

it('returns 638 from stepSize 3', () => {
  const result = spin(3);
  expect(result).toEqual(638);
});

it('returns 355 from stepSize 314', () => {
  const result = spin(314);
  expect(result).toEqual(355);
});

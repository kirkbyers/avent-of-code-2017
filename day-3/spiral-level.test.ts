import { spiralLevel } from './spiral-level';

it('should return 0 for 1', () => {
  const result = spiralLevel(1) as { level: number, i: number };
  expect(result.level).toEqual(0);
});
it('should return 1 for 3', () => {
  const result = spiralLevel(3) as { level: number, i: number };
  expect(result.level).toEqual(1);
});
it('should return 4 for 81', () => {
  const result = spiralLevel(81) as { level: number, i: number };
  expect(result.level).toEqual(4);
});

import { countUsedSquares } from './memory-model';

it('returns 8108 from flqrgnkx', () => {
  const result = countUsedSquares('flqrgnkx');
  expect(result).toEqual(8108);
});

it('returns 8204 from xlqgujun', () => {
  const result = countUsedSquares('xlqgujun');
  expect(result).toEqual(8204);
});

import { countUsedRegions } from './memory-model';

it('return 1242 from flqrgnkx', () => {
  const result = countUsedRegions('flqrgnkx');
  expect(result).toEqual(1242);
});

it('returns 1089 from xlqgujun', () => {
  const result = countUsedRegions('xlqgujun');
  expect(result).toEqual(1089);
});

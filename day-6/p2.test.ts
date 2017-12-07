import { distributeBlocksLoopSize } from './distribute-blocks';

it('returns 4 from [0, 2, 7, 0]', () => {
  expect(distributeBlocksLoopSize([0, 2, 7, 0])).toEqual(4);
});

it('returns 1086 from [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]', () => {
  const result = distributeBlocksLoopSize([5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]);
  expect(result).toEqual(1086);
});

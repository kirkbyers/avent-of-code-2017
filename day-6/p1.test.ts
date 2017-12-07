import { distributeBlocks } from './distribute-blocks';

it('returns 5 from [0, 2, 7, 0]', () => {
  expect(distributeBlocks([0, 2, 7, 0])).toEqual(5);
});

it('returns 5042 from [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]', () => {
  const result = distributeBlocks([5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]);
  expect(result).toEqual(5042);
});

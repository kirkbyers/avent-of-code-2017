import { resolve } from 'path';

import { dance } from './dance';

import { commaFileToArray } from '../util/comma-file-to-array';

it('returns baedc from test-input.txt with initDancers of abcde', async () => {
  const moves = await commaFileToArray(resolve(__dirname, '../../day-16/test-input.txt'));
  const result = dance(moves, 'abcde');
  expect(result).toEqual('baedc');
});

it('returns nlciboghjmfdapek from input.txt', async () => {
  const moves = await commaFileToArray(resolve(__dirname, '../../day-16/input.txt'));
  const result = dance(moves);
  expect(result).toEqual('nlciboghjmfdapek');
});

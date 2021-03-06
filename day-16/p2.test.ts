import { resolve } from 'path';

import { dance } from './dance';

import { commaFileToArray } from '../util/comma-file-to-array';

it('returns nlciboghmkedpfja from input.txt repeating 1E9', async () => {
  // NOTE: long; runtime;
  const moves = await commaFileToArray(resolve(__dirname, '../../day-16/input.txt'));
  const result = dance(moves, undefined, 1E9);
  expect(result).toEqual('nlciboghmkedpfja');
});

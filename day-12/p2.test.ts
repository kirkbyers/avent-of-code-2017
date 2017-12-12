import { resolve } from 'path';

import { countGroups } from './traverse-pipe';

import { fileToString } from '../util/file-to-string';

it('returns 6 from test-input.txt', async () => {
  const inputString = await fileToString(resolve(__dirname, '../../day-12/test-input.txt'));
  const result = countGroups(inputString);
  expect(result).toEqual(2);
});

it('returns 171 from input.txt', async () => {
  const inputString = await fileToString(resolve(__dirname, '../../day-12/input.txt'));
  const result = countGroups(inputString);
  expect(result).toEqual(171);
});

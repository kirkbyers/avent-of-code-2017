import { resolve } from 'path';

import { connectedToZero } from './traverse-pipe';

import { fileToString } from '../util/file-to-string';

it('returns 6 from test-input.txt', async () => {
  const inputString = await fileToString(resolve(__dirname, '../../day-12/test-input.txt'));
  const result = connectedToZero(inputString);
  expect(result).toEqual(6);
});

it('returns 141 from input.txt', async () => {
  const inputString = await fileToString(resolve(__dirname, '../../day-12/input.txt'));
  const result = connectedToZero(inputString);
  expect(result).toEqual(141);
});

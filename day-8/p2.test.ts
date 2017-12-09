import { resolve } from 'path';

import { findRegistryMax } from './build-registry';

import { fileToArray } from '../util/file-to-array';

it('returns 10 as maxHeld from test-input.txt', async () => {
  const filePath = resolve(__dirname, '../../day-8/test-input.txt');
  const input = await fileToArray(filePath);
  const result = findRegistryMax(input);
  expect(result.maxHeld).toEqual(10);
});

it('returns 6347 as maxHeld from input.txt', async () => {
  const filePath = resolve(__dirname, '../../day-8/input.txt');
  const input = await fileToArray(filePath);
  const result = findRegistryMax(input);
  expect(result.maxHeld).toEqual(6347);
});

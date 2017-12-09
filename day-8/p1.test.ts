import { resolve } from 'path';

import { findRegistryMax } from './build-registry';

import { fileToArray } from '../util/file-to-array';

it('returns 1 as max from test-input.txt', async () => {
  const filePath = resolve(__dirname, '../../day-8/test-input.txt');
  const input = await fileToArray(filePath);
  const result = findRegistryMax(input);
  expect(result.max).toEqual(1);
});

it('returns 5966 as max from input.txt', async () => {
  const filePath = resolve(__dirname, '../../day-8/input.txt');
  const input = await fileToArray(filePath);
  const result = findRegistryMax(input);
  expect(result.max).toEqual(5966);
});

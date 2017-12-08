import { resolve } from 'path';

import { findFileMapRoot } from './build-tree';

it('returns tknk as root for test-input.txt', async () => {
  const result = await findFileMapRoot(resolve(__dirname, '../../day-7/test-input.txt'));
  expect(result.root).toEqual('tknk');
});

it('returns gynfwly as root for input.txt', async () => {
  const result = await findFileMapRoot(resolve(__dirname, '../../day-7/input.txt'));
  expect(result.root).toEqual('gynfwly');
});

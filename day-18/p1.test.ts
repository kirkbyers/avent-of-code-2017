import { resolve } from 'path';

import { playInstructions } from './duet';

import { fileToArray } from '../util/file-to-array';

// it('returns 4 from test-input.txt', async () => {
//   const inp = await fileToArray(resolve(__dirname, '../../day-18/test-input.txt'));
//   const result = playInstructions(inp);
//   expect(result).toEqual(4);
// });

it('returns  from input.txt', async () => {
  const inp = await fileToArray(resolve(__dirname, '../../day-18/input.txt'));
  const result = playInstructions(inp);
  console.log(result);
  // expect(result).toEqual(4);
});

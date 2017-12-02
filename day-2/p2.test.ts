import { resolve } from 'path';

import { checkSum } from './p2';

it('should return 9 with test2.txt', async () => {
  const filePath = resolve(__dirname, '../../day-2/test2.txt');
  const result = await checkSum(filePath);
  expect(result).toEqual(9);
});

it('should return a result with input.txt', async (done) => {
  const filePath = resolve(__dirname, '../../day-2/input2.txt');
  console.log(await checkSum(filePath));
  done();
});

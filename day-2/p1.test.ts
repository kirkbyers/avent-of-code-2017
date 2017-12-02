import { resolve } from 'path';

import { checkSum } from './p1';

it('should return 18 with test.txt', async () => {
  const filePath = resolve(__dirname, '../../day-2/test.txt');
  const result = await checkSum(filePath);
  expect(result).toEqual(18);
});

it('should return a result with input.txt', async (done) => {
  const filePath = resolve(__dirname, '../../day-2/input.txt');
  console.log(await checkSum(filePath));
  done();
});

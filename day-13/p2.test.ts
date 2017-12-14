import { resolve } from 'path';
import { findDelay } from './travel-firewall';

it('returns 24 from test-input.txt', async () => {
  const result = await findDelay(resolve(__dirname, '../../day-13/test-input.txt'));
  expect(result).toEqual(10);
});

it('returns 3823370 from input.txt', async () => {
  const result = await findDelay(resolve(__dirname, '../../day-13/input.txt'));
  expect(result).toEqual(3823370);
});

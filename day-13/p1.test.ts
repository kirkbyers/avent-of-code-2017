import { resolve } from 'path';
import { severityOfTrip } from './travel-firewall';

it('returns 24 from test-input.txt', async () => {
  const result = await severityOfTrip(resolve(__dirname, '../../day-13/test-input.txt'));
  expect(result).toEqual(24);
});

it('returns 1504 from input.txt', async () => {
  const result = await severityOfTrip(resolve(__dirname, '../../day-13/input.txt'));
  expect(result).toEqual(1504);
});

import { knotHash } from './knot-hash';

it('returns 12 as checkProduct from lengths of [3, 4, 1, 5] and seed of [0, 1, 2, 3, 4]', () => {
  const inputLengths = [3, 4, 1, 5];
  const inputSeed = [0, 1, 2, 3, 4];
  const result = knotHash(inputLengths, inputSeed);
  expect(result.checkProduct).toEqual(12);
});

it('returns 1935 as checkProduct from lengths of [14,58,0,116,179,16,1,104,2,254,167,86,255,55,122,244]', () => {
  const inputLengths = [14, 58, 0, 116, 179, 16, 1, 104, 2, 254, 167, 86, 255, 55, 122, 244];
  const result = knotHash(inputLengths);
  expect(result.checkProduct).toEqual(1935);
});

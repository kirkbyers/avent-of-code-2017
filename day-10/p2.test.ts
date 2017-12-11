import { asciiKnotHash } from './knot-hash';

it('returns a2582a3a0e66e6e86e3812dcb672a272 from "" ', () => {
  const input = '';
  const result = asciiKnotHash(input);
  expect(result).toEqual('a2582a3a0e66e6e86e3812dcb672a272');
});

it('returns 33efeb34ea91902bb2f59c9920caa6cd from "AoC 2017" ', () => {
  const input = 'AoC 2017';
  const result = asciiKnotHash(input);
  expect(result).toEqual('33efeb34ea91902bb2f59c9920caa6cd');
});

it('returns 3efbe78a8d82f29979031a4aa0b16a9d from "1,2,3" ', () => {
  const input = '1,2,3';
  const result = asciiKnotHash(input);
  expect(result).toEqual('3efbe78a8d82f29979031a4aa0b16a9d');
});

it('returns 63960835bcdc130f0b66d7ff4f6a5a8e from "1,2,4" ', () => {
  const input = '1,2,4';
  const result = asciiKnotHash(input);
  expect(result).toEqual('63960835bcdc130f0b66d7ff4f6a5a8e');
});

it('returns dc7e7dee710d4c7201ce42713e6b8359 from "14,58,0,116,179,16,1,104,2,254,167,86,255,55,122,244"', () => {
  const input = '14,58,0,116,179,16,1,104,2,254,167,86,255,55,122,244';
  const result = asciiKnotHash(input);
  expect(result).toEqual('dc7e7dee710d4c7201ce42713e6b8359');
});

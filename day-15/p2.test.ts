import { judgeGenerators } from './generators';

it('returns 309 from seeds 65 and 8921', () => {
  const result = judgeGenerators(65, 8921, 4, 8, 5E6);
  expect(result).toEqual(309);
});

it('returns 290 from seeds 591 and 393', () => {
  const result = judgeGenerators(591, 393, 4, 8, 5E6);
  expect(result).toEqual(290);
});

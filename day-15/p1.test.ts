import { judgeGenerators } from './generators';

it('returns 588 from seeds 65 and 8921', () => {
  const result = judgeGenerators(65, 8921);
  expect(result).toEqual(588);
});

it('returns 619 from seeds 591 and 393', () => {
  const result = judgeGenerators(591, 393);
  expect(result).toEqual(619);
});

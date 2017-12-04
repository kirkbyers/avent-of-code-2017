import { passphraseValid } from './validate-passphrase';

it('"aa bb cc dd ee" is valid', () => {
  expect(passphraseValid('aa bb cc dd ee')).toEqual(true);
});
it('"aa bb cc dd aa" is invalid', () => {
  expect(passphraseValid('aa bb cc dd aa')).toEqual(false);
});
it('"aa bb cc dd aaa" is valid', () => {
  expect(passphraseValid('aa bb cc dd aaa')).toEqual(true);
});

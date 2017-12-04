import { resolve } from 'path';

import { readFile } from './read-input';
import { validPassphrase } from './validate-passphrase-anagram';

it('abcde fghij is valid', () => {
  expect(validPassphrase('abcde fghij')).toEqual(true);
});
it('abcde xyz ecdab is invalid', () => {
  expect(validPassphrase('abcde xyz ecdab')).toEqual(false);
});
it('a ab abc abd abf abj is valid', () => {
  expect(validPassphrase('a ab abc abd abf abj')).toEqual(true);
});
it('iiii oiii ooii oooi oooo is valid', () => {
  expect(validPassphrase('iiii oiii ooii oooi oooo')).toEqual(true);
});
it('oiii ioii iioi iiio is invalid', () => {
  expect(validPassphrase('oiii ioii iioi iiio ')).toEqual(false);
});

it('input.txt has 265 valid anagram passphrases', async () => {
  const inputPath = resolve(__dirname, '../../day-4/input.txt');
  const inputs = await readFile(inputPath);
  let counter = 0;
  inputs.forEach((input) => {
    if (validPassphrase(input)) {
      counter++;
    }
  });
  expect(counter).toEqual(265);
});

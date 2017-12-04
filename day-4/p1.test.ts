import { resolve } from 'path';

import { readFile } from './read-input';
import { passphraseValid } from './validate-passphrase';

it('input.txt has 383 valid passphrases', async () => {
  const inputPath = resolve(__dirname, '../../day-4/input.txt');
  const inputs = await readFile(inputPath);
  let counter = 0;
  inputs.forEach((input) => {
    if (passphraseValid(input)) {
      counter++;
    }
  });
  expect(counter).toEqual(383);
});

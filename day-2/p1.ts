import { readFile } from './readfile';

export const checkSum = async (filePath: string) => {
  const input = await readFile(filePath);
  let sum = 0;
  input.forEach((inp) => {
    const line = inp.match(/\S+/g) || [];
    let max: number | null = null;
    let min: number | null = null;
    line.forEach((char) => {
      const charNumber = Number(char);
      if (max === null || charNumber > max) {
        max = charNumber;
      }
      if (min === null || charNumber < min) {
        min = charNumber;
      }
    });
    sum += (max || 0) - (min || 0);
  });
  return sum;
};

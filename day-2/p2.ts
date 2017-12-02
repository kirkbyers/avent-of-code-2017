import { readFile } from './readfile';

export const checkSum = async (filePath: string) => {
  const input = await readFile(filePath);
  let sum = 0;
  input.forEach((inp) => {
    const line = inp.match(/\S+/g) || [];
    let big: number | null = null;
    let little: number | null = null;

    for (let j = 0; j < line.length; j++) {
      const charNumber = Number(line[j]);
      for (let i = j + 1; i < line.length; i++) {
        const iNumber = Number(line[i]);
        const lg: number = charNumber > iNumber ? charNumber : iNumber;
        const sm: number = charNumber < iNumber ? charNumber : iNumber;
        if ((lg !== sm) && (lg % sm === 0)) {
          big = lg;
          little = sm;
          break;
        }
      }
      if (big && little) {
        break;
      }
    }

    sum += (big || 0) / (little || 1);
    big = null;
    little = null;
  });
  return sum;
};

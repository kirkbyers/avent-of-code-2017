import { createReadStream } from 'fs';

export const fileToArray = (filePath: string): Promise<number[]> => {
  return new Promise((resolve, reject) => {
    const result: number[] = [];
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data) => {
      const lines: string[] = data.split('\n');
      lines.forEach((line) => result.push(Number(line)));
    });
    readStream.on('close', () => resolve(result));
  });
};

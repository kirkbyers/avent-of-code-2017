import { createReadStream } from 'fs';

export const fileToArray = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const result: string[] = [];
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data) => {
      const lines: string[] = data.split('\n');
      lines.forEach((line) => result.push(line));
    });
    readStream.on('close', () => resolve(result));
  });
};

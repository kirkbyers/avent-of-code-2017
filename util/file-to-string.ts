import { createReadStream } from 'fs';

export const fileToString = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let result: string = '';
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data) => {
      result += data;
    });
    readStream.on('close', () => resolve(result));
  });
};

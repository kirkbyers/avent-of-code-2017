import { createReadStream } from 'fs';

export const readFile = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('data', (data) => {
      resolve(data.split('\n'));
    });
    readStream.on('error', (err) => reject(err));
    readStream.on('close', () => {
      resolve();
    });
  });
};

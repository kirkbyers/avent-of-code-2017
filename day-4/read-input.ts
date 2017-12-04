import { createReadStream } from 'fs';

export const readFile = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    const readStream = createReadStream(filePath, { encoding: 'utf8' });
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data: string) => {
      const inputs = data.split('\n');
      results.push(...inputs);
    });
    readStream.on('close', () => {
      resolve(results);
    });
  });
};

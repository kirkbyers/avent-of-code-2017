import { resolve } from 'path';

import { fileToArray } from '../util/file-to-array';
import { stepMazeRecursion, stepMazeWhile } from './maze-crawler';

it('recursionSteps([0 3  0  1  -3]) exits in 5 steps', () => {
  const recursionSteps = stepMazeRecursion([0, 3, 0, 1, -3]);
  expect(recursionSteps).toEqual(5);
});

it('whileSteps([0 3  0  1  -3]) exits in 5 steps', () => {
  const whileSteps = stepMazeWhile([0, 3, 0, 1, -3]);
  expect(whileSteps).toEqual(5);
});

it('./input.txt exits in 374269 steps', async () => {
  const inputMaze = (await fileToArray(resolve(__dirname, '../../day-5/input.txt'))).map((inp) => Number(inp));
  const result = stepMazeWhile(inputMaze);
  expect(result).toEqual(374269);
});

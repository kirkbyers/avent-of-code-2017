import { resolve } from 'path';

import { fileToArray } from './file-to-array';
import { stepMazeWhileAdv } from './maze-crawler';

it('whileSteps([0 3  0  1  -3]) exits in 10 steps', () => {
  const whileSteps = stepMazeWhileAdv([0, 3, 0, 1, -3]);
  expect(whileSteps).toEqual(10);
});

it('./input.txt exits in 27720699 steps', async () => {
  const inputMaze = await fileToArray(resolve(__dirname, '../../day-5/input.txt'));
  const result = stepMazeWhileAdv(inputMaze);
  expect(result).toEqual(27720699);
});

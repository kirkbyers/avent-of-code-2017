import { spiralLevel } from './spiral-level';

export const distanceToCenter = (inpNumber: number) => {
  const { level, i } = spiralLevel(inpNumber) || { level: 0, i: 1 };
  if (level === 0) {
    return 0;
  }

  const ii = i * i;
  const h = i - 2;
  const hh = h * h;

  let x = level;
  let y = (-1 * level) + 1;
  let steps = inpNumber - hh - 1;
  if (steps <= 0) {
    return calcDist(x, y);
  }
  // Up
  for (let j = 1; j < i; j++) {
    y++;
    steps--;
    if (steps <= 0) {
      return calcDist(x, y);
    }
  }
  // left
  for (let j = 1; j < i; j++) {
    x--;
    steps--;
    if (steps <= 0) {
      return calcDist(x, y);
    }
  }
  // down
  for (let j = 1; j < i; j++) {
    y--;
    steps--;
    if (steps <= 0) {
      return calcDist(x, y);
    }
  }
  // right
  for (let j = 1; j < i; j++) {
    x++;
    steps--;
    if (steps <= 0) {
      return calcDist(x, y);
    }
  }
};

function calcDist(x: number, y: number) {
  return Math.abs(x) + Math.abs(y);
}

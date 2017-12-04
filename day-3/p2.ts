export const neighborSumSpiral = (inpNumber: number) => {
  const grid: any = { '0, 0': 1 };

  let level = 0;
  let x = 0;
  let y = 0;
  let lastVal = 1;
  while (lastVal < inpNumber) {
    level++;
    x++;
    const max = level;

    lastVal = sumNeighbors(grid, x, y);
    grid[`${x}, ${y}`] = lastVal;
    if (lastVal > inpNumber) {
      return lastVal;
    }

    // up
    for (let i = y; i < max; i++) {
      y++;
      lastVal = sumNeighbors(grid, x, y);
      grid[`${x}, ${y}`] = lastVal;
      if (lastVal > inpNumber) {
        return lastVal;
      }
    }
    // left
    for (let i = x; i > -1 * max; i--) {
      x--;
      lastVal = sumNeighbors(grid, x, y);
      grid[`${x}, ${y}`] = lastVal;
      if (lastVal > inpNumber) {
        return lastVal;
      }
    }
    // down
    for (let i = y; i > -1 * max; i--) {
      y--;
      lastVal = sumNeighbors(grid, x, y);
      grid[`${x}, ${y}`] = lastVal;
      if (lastVal > inpNumber) {
        return lastVal;
      }
    }
    // right
    for (let i = x; i < max; i++) {
      x++;
      lastVal = sumNeighbors(grid, x, y);
      grid[`${x}, ${y}`] = lastVal;
      if (lastVal > inpNumber) {
        return lastVal;
      }
    }
  }
  return lastVal;
};

function sumNeighbors(grid: any, x: number, y: number) {
  let result = 0;
  result += grid[`${x + 1}, ${y}`] || 0;
  result += grid[`${x - 1}, ${y}`] || 0;
  result += grid[`${x}, ${y + 1}`] || 0;
  result += grid[`${x}, ${y - 1}`] || 0;
  result += grid[`${x - 1}, ${y - 1}`] || 0;
  result += grid[`${x - 1}, ${y + 1}`] || 0;
  result += grid[`${x + 1}, ${y - 1}`] || 0;
  result += grid[`${x + 1}, ${y + 1}`] || 0;
  return result;
}

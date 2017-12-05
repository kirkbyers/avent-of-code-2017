export const stepMazeRecursion = (maze: number[] = [], checkIndex: number = 0, steps: number = 0): number => {
  // RangeError: Maximum call stack size exceeded for input.txt
  if (checkIndex < 0 || checkIndex > maze.length - 1) {
    return steps;
  }
  const checkNext = maze[checkIndex] + checkIndex;
  maze[checkIndex]++;
  return stepMazeRecursion(maze, checkNext, steps + 1);
};

export const stepMazeWhile = (maze: number[] = []) => {
  let steps = 0;
  let checkIndex = 0;
  while (checkIndex < maze.length && checkIndex >= 0) {
    steps++;
    const tmpIndex = checkIndex + maze[checkIndex];
    maze[checkIndex]++;
    checkIndex = tmpIndex;
  }
  return steps;
};

export const stepMazeWhileAdv = (maze: number[] = []) => {
  let steps = 0;
  let checkIndex = 0;
  while (checkIndex < maze.length && checkIndex >= 0) {
    steps++;
    const tmpIndex = checkIndex + maze[checkIndex];
    if (maze[checkIndex] >= 3) {
      maze[checkIndex]--;
    } else {
      maze[checkIndex]++;
    }
    checkIndex = tmpIndex;
  }
  return steps;
};

export const connectedToZero = (inp: string) => {
  const pipes = buildPipes(inp);
  return Object.keys(pipes)
    .map((key) => isConnectedToZero(pipes, key))
    .reduce((result: number, isConnected) => {
      if (isConnected) {
        result++;
      }
      return result;
    }, 0);
};

export const countGroups = (inp: string) => {
  let pipes = buildPipes(inp);
  let groupCounter = 0;
  while (Object.keys(pipes).length > 0) {
    pipes = removeGroup(pipes);
    groupCounter++;
  }
  return groupCounter;
};

const removeGroup = (pipes: any, target?: string) => {
  let tmpPipes = { ...pipes };
  const tmpTarget = target === undefined ? Object.keys(pipes)[0] : target;
  const targetPipes = tmpPipes[tmpTarget];
  delete tmpPipes[tmpTarget];
  targetPipes.forEach((pipe: string) => {
    if (tmpPipes[pipe] !== undefined) {
      tmpPipes = removeGroup(tmpPipes, pipe);
    }
  });
  return tmpPipes;
};

const buildPipes = (inp: string): any => {
  return inp.split('\n').reduce((result: any, line) => {
    const lineSplit = line.split(' <-> ');
    const host = lineSplit[0];
    const targets = lineSplit[1].split(', ');
    result[host] = targets;
    return result;
  }, {});
};

const isConnectedToZero = (pipes: any, check: string, ignore: string[] = []) => {
  if (check === '0') {
    return true;
  }
  if (pipes[check].indexOf('0') > -1) {
    return true;
  }
  ignore.push(check);
  const checkPipes = pipes[check].filter((pipe: string) => ignore.indexOf(pipe) === -1);
  if (checkPipes.length === 0) {
    return false;
  }
  return checkPipes.filter((pipe: string) => isConnectedToZero(pipes, pipe, ignore)).length > 0;
};

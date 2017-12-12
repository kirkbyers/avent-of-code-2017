interface PathMap {
  [x: string]: number;
  n: number;
  ne: number;
  nw: number;
  s: number;
  se: number;
  sw: number;
}

export const followPath = (inp: string) => {
  const directions = inp.split(',');
  const pathMap: PathMap = directions.reduce((result, dir) => {
    const tmpResult: any = { ...result };
    tmpResult[dir]++;
    return tmpResult;
  }, {
      n: 0,
      ne: 0,
      nw: 0,
      s: 0,
      se: 0,
      sw: 0,
    });
  let reducedMap = reduceMap(pathMap);
  while (reducedMap.changes > 0) {
    reducedMap = reduceMap(reducedMap.map);
  }
  const negatedMap = negateMap(reducedMap.map);
  return Object.keys(negatedMap.map).reduce((result, key) => result + negatedMap.map[key], 0);
};

export const findMaxDist = (inp: string) => {
  // NOTE: This has terible run time, but I'm tired today. Runs on given inp in 44s ><
  const directions = inp.split(',');
  return directions.reduce((result: any, dir, index) => {
    if (result === undefined) {
      return followPath(directions.slice(0, index + 1).join(','));
    }
    const distance = followPath(directions.slice(0, index + 1).join(','));
    if (distance > result) {
      return distance;
    }
    return result;
  }, undefined);
};

const reduceMap = (inpMap: PathMap) => {
  let changeCounter = 0;
  let result = reducePair(inpMap, 'n', 'se', 'ne');
  changeCounter += result.changes;
  result = reducePair(result.map, 'ne', 's', 'se');
  changeCounter += result.changes;
  result = reducePair(result.map, 'se', 'sw', 's');
  changeCounter += result.changes;
  result = reducePair(result.map, 's', 'nw', 'sw');
  changeCounter += result.changes;
  result = reducePair(result.map, 'sw', 'n', 'nw');
  changeCounter += result.changes;
  result = reducePair(result.map, 'nw', 'ne', 'n');
  changeCounter += result.changes;
  return { map: result.map, changes: changeCounter };
};

const negateMap = (inpMap: PathMap) => {
  let changeCounter = 0;
  let result = negatePair(inpMap, 'n', 's');
  changeCounter += result.changes;
  result = negatePair(result.map, 'ne', 'sw');
  changeCounter += result.changes;
  result = negatePair(result.map, 'nw', 'se');
  changeCounter += result.changes;
  return { map: result.map, changes: changeCounter };
};

const negatePair = (inpMap: PathMap, inp1: string, inp2: string) => {
  if (inpMap[inp1] === 0 || inpMap[inp2] === 0) {
    return { map: inpMap, changes: 0 };
  }
  const tmpMap = { ...inpMap };
  const base = inpMap[inp1] < inpMap[inp2] ? inpMap[inp1] : inpMap[inp2];
  tmpMap[inp1] -= base;
  tmpMap[inp2] -= base;
  return { map: tmpMap, changes: base };
};

const reducePair = (inpMap: PathMap, inp1: string, inp2: string, result: string) => {
  if (inpMap[inp1] === 0 || inpMap[inp2] === 0) {
    return { map: inpMap, changes: 0 };
  }
  const tmpMap = { ...inpMap };
  const base = inpMap[inp1] < inpMap[inp2] ? inpMap[inp1] : inpMap[inp2];
  tmpMap[inp1] -= base;
  tmpMap[inp2] -= base;
  tmpMap[result] += base;
  return { map: tmpMap, changes: base };
};

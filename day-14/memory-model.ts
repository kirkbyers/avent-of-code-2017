import { asciiKnotHash } from '../day-10/knot-hash';

type MemoryModel = Array<Array<string | number>>;

export const countUsedSquares = (seedString: string) => {
  const model: MemoryModel = buildMemoryModel(seedString);
  return model.reduce((result: number, row) => {
    for (const i of row) {
      if (i === '1') {
        result++;
      }
    }
    return result;
  }, 0);
};

export const countUsedRegions = (seedString: string) => {
  const model: MemoryModel = buildMemoryModel(seedString);
  let regionCounter = 0;
  const removeRegion = (row: number, column: number) => {
    const target = (model[row] || [])[column] || '0';
    if (target === '0') {
      return;
    }
    model[row][column] = '0';
    removeRegion(row + 1, column);
    removeRegion(row - 1, column);
    removeRegion(row, column + 1);
    removeRegion(row, column - 1);
    return;
  };

  for (let row = 0; row < model.length; row++) {
    for (let col = 0; col < model[row].length; col++) {
      const oldVal = model[row][col];
      if (oldVal === '1') {
        removeRegion(row, col);
        regionCounter++;
      }
    }
  }
  return regionCounter;
};

const buildMemoryModel = (seedString: string) => {
  const model: MemoryModel = [];
  for (let i = 0; i < 128; i++) {
    const knotHashSeed = `${seedString}-${i}`;
    const rowHex = asciiKnotHash(knotHashSeed);
    const rowResult = rowHex.split('').map((x) => parseInt(x, 16));
    model.push(rowResult.map((x) => ('0000' + x.toString(2)).substr(-4)).join('').split(''));
  }
  return model;
};

import { fileToArray } from '../util/file-to-array';

export const severityOfTrip = async (filePath: string): Promise<number> => {
  const inputs = await fileToArray(filePath);
  const map = inputs.reduce((result: any, inp) => {
    const inpSplit = inp.split(': ');
    result.scannedLayers[inpSplit[0]] = Number(inpSplit[1]);
    if (Number(inpSplit[0]) > result.max) {
      result.max = Number(inpSplit[0]);
    }
    return result;
  }, { scannedLayers: {}, max: 0 });
  let currentS = 0;
  let currentL = 0;
  let severity = 0;
  while (currentL < map.max + 1) {
    if (map.scannedLayers[currentL] !== undefined) {
      if (currentS % (2 * (map.scannedLayers[currentL] - 1)) === 0) {
        severity += currentL * map.scannedLayers[currentL];
      }
    }
    currentS++;
    currentL++;
  }
  return severity;
};

export const findDelay = async (filePath: string): Promise<number> => {
  const inputs = await fileToArray(filePath);
  const map = inputs.reduce((result: any, inp) => {
    const inpSplit = inp.split(': ');
    result.scannedLayers[inpSplit[0]] = Number(inpSplit[1]);
    if (Number(inpSplit[0]) > result.max) {
      result.max = Number(inpSplit[0]);
    }
    return result;
  }, { scannedLayers: {}, max: 0 });
  let currentS = 0;
  let currentL = 0;
  let severity = 0;
  while (currentL < map.max + 1) {
    if (map.scannedLayers[currentL] !== undefined) {
      if (currentS % (2 * (map.scannedLayers[currentL] - 1)) === 0) {
        severity += currentL * map.scannedLayers[currentL];
      }
    }
    currentS++;
    currentL++;
  }
  let startTime = 0;
  while (severity > 0) {
    startTime++;
    currentS = startTime;
    currentL = 0;
    severity = 0;
    while (currentL < map.max + 1 && severity === 0) {
      if (map.scannedLayers[currentL] !== undefined) {
        if (currentS % (2 * (map.scannedLayers[currentL] - 1)) === 0) {
          severity += (currentL + 1) * map.scannedLayers[currentL];
        }
      }
      currentS++;
      currentL++;
    }
  }
  return startTime;
};

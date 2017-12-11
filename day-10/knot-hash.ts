export const knotHash = (lengths: number[], seed: number[] = []) => {
  const inputNumbers = [...lengths];
  const knot = [...seed];
  if (seed.length === 0) {
    for (let i = 0; i < 256; i++) {
      knot.push(i);
    }
  }
  let currentPosition = 0;
  let skipSize = 0;
  const hashedKnot = inputNumbers.reduce((result, length) => {
    const tmpResult = [...result];
    for (let i = 0; i < length; i++) {
      tmpResult[(i + currentPosition) % result.length] = result[(currentPosition + length - i - 1) % result.length];
    }
    currentPosition = (currentPosition + length + skipSize) % result.length;
    skipSize++;
    return tmpResult;
  }, knot);
  return { checkProduct: checkProduct(hashedKnot), knot: hashedKnot };
};

export const asciiKnotHash = (lengthsString: string) => {
  const inputNumbers = lengthsString.split('').map((char, index) => lengthsString.charCodeAt(index));
  const knot = [];
  [17, 31, 73, 47, 23].forEach((item) => inputNumbers.push(item));
  for (let i = 0; i < 256; i++) {
    knot.push(i);
  }
  let currentPosition = 0;
  let skipSize = 0;
  let loopCounter = 0;
  let sparseHash = [...knot];
  while (loopCounter < 64) {
    sparseHash = inputNumbers.reduce((result, length) => {
      const tmpResult = [...result];
      for (let i = 0; i < length; i++) {
        tmpResult[(i + currentPosition) % result.length] = result[(currentPosition + length - i - 1) % result.length];
      }
      currentPosition = (currentPosition + length + skipSize) % result.length;
      skipSize++;
      return tmpResult;
    }, sparseHash);
    loopCounter++;
  }
  loopCounter = 0;
  const denseHash = [];
  while (loopCounter < 16) {
    let xorCombination = 0;
    for (let i = 16 * loopCounter; i < 16 * (loopCounter + 1); i++) {
      if (i === 16 * loopCounter) {
        xorCombination = sparseHash[i];
      } else {
        // tslint:disable-next-line
        xorCombination = xorCombination ^ sparseHash[i];
      }
    }
    denseHash.push(xorCombination);
    loopCounter++;
  }
  const hexHash = denseHash.reduce((result, hashNumber) => {
    let hexString = hashNumber.toString(16);
    while (hexString.length < 2) {
      hexString = `0${hexString}`;
    }
    return result + hexString;
  }, '');
  return hexHash;
};

const checkProduct = (knot: number[]) => knot.length > 2 ? knot[0] * knot[1] : null;

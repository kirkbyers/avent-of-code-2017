export const distributeBlocks = (inpBlocks: number[]) => {
  const knownCombination = {
    [blocksToString(inpBlocks)]: true,
  };
  let counter = 0;

  let blocks = distribute(inpBlocks);
  let blocksString = blocksToString(blocks);
  counter++;

  while (knownCombination[blocksString] === undefined) {
    knownCombination[blocksString] = true;
    blocks = distribute(inpBlocks);
    blocksString = blocksToString(blocks);
    counter++;
  }
  return counter;
};

export const distributeBlocksLoopSize = (inpBlocks: number[]) => {
  // TODO: factor out common code
  const knownCombination = {
    [blocksToString(inpBlocks)]: true,
  };

  let blocks = distribute(inpBlocks);
  let blocksString = blocksToString(blocks);

  while (knownCombination[blocksString] === undefined) {
    knownCombination[blocksString] = true;
    blocks = distribute(inpBlocks);
    blocksString = blocksToString(blocks);
  }

  const searchString = blocksString;

  let counter = 0;
  blocks = distribute(inpBlocks);
  blocksString = blocksToString(blocks);
  counter++;

  while (blocksString !== searchString) {
    knownCombination[blocksString] = true;
    blocks = distribute(inpBlocks);
    blocksString = blocksToString(blocks);
    counter++;
  }
  return counter;
};

const findMax = (blocks: number[]) => {
  let maxIndex = 0;
  let maxValue = 0;
  blocks.forEach((block, index) => {
    if (block > maxValue) {
      maxIndex = index;
      maxValue = block;
    }
  });
  return {
    maxIndex,
    maxValue,
  };
};

const blocksToString = (blocks: number[]) => {
  const resultString = blocks.reduce((result, block) => `${result},${block}`, '');
  return resultString;
};

const hasBeenSeen = (current: string, seen: string[]) => {
  return seen.indexOf(current) > -1;
};

const distribute = (blocks: number[]) => {
  const { maxIndex, maxValue } = findMax(blocks);
  blocks[maxIndex] = 0;
  let currentIndex = (maxIndex + 1) % blocks.length;
  let values = maxValue;
  while (values > 0) {
    blocks[currentIndex]++;
    values--;
    currentIndex = (currentIndex + 1) % blocks.length;
  }
  return blocks;
};

export const scoreGroup = (inp: string) => {
  const { group } = cleanGroup(inp);
  const groupScore = scoreLocalGroup(group);
  return groupScore.score;
};

export const countTrash = (inp: string) => {
  const { trashCounter } = cleanGroup(inp);
  return trashCounter;
};

const cleanGroup = (inp: string) => {
  let keep = true;
  const inpGroup = inp.split('');
  let trashCounter = 0;
  const cleanedGroup = inpGroup.filter((inpChar, index) => {
    if (keep && inpChar === '<' && !isNegated(inpGroup, index)) {
      keep = false;
    }
    if (!keep && inpChar === '>' && !isNegated(inpGroup, index)) {
      keep = true;
      trashCounter--;
    }
    if (!keep && !isNegated(inpGroup, index) && inpChar !== '!') {
      trashCounter++;
    }
    return keep;
  });
  return { group: cleanedGroup, trashCounter };
};

const scoreLocalGroup = (inpGroup: string[]) => {
  const reduceGroup = inpGroup.reduce((result, inp) => {
    const tmpResult = { ...result };
    if (inp === '{') {
      tmpResult.open++;
    }
    if (inp === '}') {
      tmpResult.score += result.open;
      tmpResult.open--;
    }
    return tmpResult;
  }, { open: 0, score: 0 });
  return reduceGroup;
};

const isNegated = (inpGroup: string[], checkIndex: number): boolean => {
  if (checkIndex === 0) {
    return false;
  }
  if (checkIndex === inpGroup.length - 1) {
    return false;
  }
  if (inpGroup[checkIndex - 1] === '!') {
    return !isNegated(inpGroup, checkIndex - 1);
  }
  return false;
};

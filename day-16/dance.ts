type Dancers = string[];

export const dance = (moves: string[], inpDancers: string = 'abcdefghijklmnop', repeat: number = 1) => {
  let dancers = inpDancers.split('');
  moves.forEach((move) => {
    dancers = executeMove(dancers, move);
  });
  const danceMap = dancers.map((dancer: string, index: number) => {
    const oldIndex = inpDancers.indexOf(dancer);
    return oldIndex;
  });
  let counter = 1;
  while (counter < repeat) {
    const oldVals = dancers;
    dancers = danceMap.map((dancerInc) => oldVals[dancerInc]);
    counter++;
  }
  return dancers.join('');
};

const executeMove = (dancers: Dancers, move: string): Dancers => {
  switch (move[0]) {
    case 's': {
      const moveContent = move.substr(1);
      return spin(dancers, moveContent);
    }
    case 'x': {
      const moveContent = move.substr(1);
      const moveSplit = moveContent.split('/');
      return exchange(dancers, moveSplit[0], moveSplit[1]);
    }
    case 'p': {
      return partner(dancers, move[1], move[3]);
    }
    default:
      return dancers;
  }
};

const spin = (dancers: Dancers, spinLength: string | number) => {
  const tmpDancers = [...dancers];
  const dancersSlice = tmpDancers.splice(-1 * Number(spinLength));
  return dancersSlice.concat(tmpDancers);
};

const exchange = (dancers: Dancers, aIndex: string | number, bIndex: string | number) => {
  const indexA = Number(aIndex);
  const indexB = Number(bIndex);
  const oldB = dancers[indexB];
  const oldA = dancers[indexA];
  dancers[indexA] = oldB;
  dancers[indexB] = oldA;
  return dancers;
};

const partner = (dancers: Dancers, aValue: string, bValue: string) => {
  const indexA = dancers.indexOf(aValue);
  const indexB = dancers.indexOf(bValue);
  const oldB = dancers[indexB];
  const oldA = dancers[indexA];
  dancers[indexA] = oldB;
  dancers[indexB] = oldA;
  return dancers;
};

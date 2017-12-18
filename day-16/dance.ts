type Dancers = string[];

export const dance = (moves: string[], inpDancers: string = 'abcdefghijklmnop', repeat: number = 1) => {
  // Save config
  const configs: string[] = [];

  // Current config of dancers
  let dancers = inpDancers.split('');

  for (let i = 0; i < repeat; i++) {
    const currentConfig = dancers.join('');
    // Check for cycle
    if (configs.indexOf(currentConfig) > -1) {
      // i is length of cycle
      // return member of cycle which will be the config on itteration `repeat`
      return configs[repeat % i];
    }
    configs.push(currentConfig);

    moves.forEach((move) => {
      dancers = executeMove(dancers, move);
    });
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

interface Registry {
  [name: string]: number;
}

export const playInstructions = (instructions: string[]) => {
  const playQueue: number[] = [];
  const recoveryQueue: number[] = [];
  const registry: Registry = {};
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    const inpSplit = instruction.split(' ');
    const instructionType = inpSplit[0];
    if (!registry.hasOwnProperty(inpSplit[1])) {
      registry[inpSplit[1]] = 0;
    }
    switch (instructionType) {
      case 'snd':
        playQueue.push(registry[inpSplit[1]]);
        break;
      case 'set':
        const setTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = setTo;
        break;
      case 'add':
        const addTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] += addTo;
        break;
      case 'mul':
        const mulTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = registry[inpSplit[1]] * mulTo;
        break;
      case 'mod':
        const modTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = registry[inpSplit[1]] % modTo;
        break;
      case 'rcv':
        if (registry[inpSplit[1]] !== 0) {
          recoveryQueue.push(playQueue[playQueue.length - 1]);
        }
        break;
      case 'jgz':
        if (
          registry[inpSplit[1]] !== 0 &&
          Number(inpSplit[2]) + i < instructions.length &&
          Number(inpSplit[2]) + i >= 0
        ) {
          const jgzTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
          i += jgzTo - 1;
        }
        break;
    }
    if (recoveryQueue.length > 0) {
      return recoveryQueue[0];
    }
  }
  return 0;
};
export const playInstructions2 = (instructions: string[]) => {
  const playQueue: number[] = [];
  const recoveryQueue: number[] = [];
  const registry: Registry = {};
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    const inpSplit = instruction.split(' ');
    const instructionType = inpSplit[0];
    if (!registry.hasOwnProperty(inpSplit[1])) {
      registry[inpSplit[1]] = 0;
    }
    switch (instructionType) {
      case 'snd':
        playQueue.push(registry[inpSplit[1]]);
        break;
      case 'set':
        const setTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = setTo;
        break;
      case 'add':
        const addTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] += addTo;
        break;
      case 'mul':
        const mulTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = registry[inpSplit[1]] * mulTo;
        break;
      case 'mod':
        const modTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
        registry[inpSplit[1]] = registry[inpSplit[1]] % modTo;
        break;
      case 'rcv':
        if (registry[inpSplit[1]] !== 0) {
          recoveryQueue.push(playQueue[playQueue.length - 1]);
        }
        break;
      case 'jgz':
        if (
          registry[inpSplit[1]] !== 0 &&
          Number(inpSplit[2]) + i < instructions.length &&
          Number(inpSplit[2]) + i >= 0
        ) {
          const jgzTo = registry.hasOwnProperty(inpSplit[2]) ? registry[inpSplit[2]] : Number(inpSplit[2]);
          i += jgzTo - 1;
        }
        break;
    }
    if (recoveryQueue.length > 0) {
      return recoveryQueue[0];
    }
  }
  return 0;
};

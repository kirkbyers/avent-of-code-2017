interface Instruction {
  target: string;
  value: number;
  condition: string;
  conditionTarget: string;
  conditionValue: number;
}

export const findRegistryMax = (inpInstructions: string[]): any => {
  const instructions: Instruction[] = formatInstructions(inpInstructions);
  const finalRegistry: any = instructions.reduce((result, instruction) => {
    const registry = executeInstructions(result.registry, instruction);
    const currentRegMax = findMaxInRegistry(registry);
    const maxHeld = result.maxHeld === undefined ? currentRegMax :
      (currentRegMax > (result.maxHeld || 0) ? currentRegMax : result.maxHeld);
    return { registry, maxHeld };
  }, { maxHeld: undefined, registry: {} });
  return {
    ...finalRegistry,
    max: findMaxInRegistry(finalRegistry.registry),
  };
};

const findMaxInRegistry = (registry: any) => Object.keys(registry).reduce((max: number, key) => {
  if (max === undefined) {
    return registry[key];
  }
  if (registry[key] > max) {
    return registry[key];
  }
  return max;
}, undefined);

const executeInstructions = (registry: any, instruction: Instruction) => {
  const result = { ...registry };
  if (!result.hasOwnProperty(instruction.conditionTarget)) {
    result[instruction.conditionTarget] = 0;
  }
  if (!result.hasOwnProperty(instruction.target)) {
    result[instruction.target] = 0;
  }
  switch (instruction.condition) {
    case '==':
      if (result[instruction.conditionTarget] === instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    case '>':
      if (result[instruction.conditionTarget] > instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    case '<':
      if (result[instruction.conditionTarget] < instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    case '<=':
      if (result[instruction.conditionTarget] <= instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    case '>=':
      if (result[instruction.conditionTarget] >= instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    case '!=':
      if (result[instruction.conditionTarget] !== instruction.conditionValue) {
        result[instruction.target] += instruction.value;
      }
      return result;
    default:
      return result;
  }
};

const formatInstructions = (instructions: string[]) => {
  return instructions.map((instruction) => {
    const ifSplit = instruction.split('if ').map((val) => val.trim());
    const targetSplit = ifSplit[0].split(' ');
    const target = targetSplit[0];
    const value = formatValue(targetSplit[1], targetSplit[2]);
    const conditionSplit = ifSplit[1].split(' ');
    const condition = conditionSplit[1];
    const conditionTarget = conditionSplit[0];
    const conditionValue = Number(conditionSplit[2]);
    return {
      condition,
      conditionTarget,
      conditionValue,
      target,
      value,
    };
  });
};

const formatValue = (incOrDec: string, value: string) => {
  const incDecMap: any = {
    dec: -1,
    inc: 1,
  };
  return Number(value) * incDecMap[incOrDec];
};

class Generator {
  public previousVal: number;
  private factor: number;
  private mod: number | undefined;

  constructor(seedNumber: number, factor: number, mod?: number) {
    this.previousVal = seedNumber;
    this.factor = factor;
    this.mod = mod;
  }

  public nextValue = () => {
    let result = (this.previousVal * this.factor) % 2147483647;
    if (this.mod !== undefined) {
      while (result % this.mod !== 0) {
        result = (result * this.factor) % 2147483647;
      }
    }
    this.previousVal = result;
    return result;
  }
}

export const judgeGenerators = (
  seedNumberA: number,
  seedNumberB: number,
  modA?: number,
  modB?: number,
  numberOfChecks: number = 40000000,
) => {
  const genA = new Generator(seedNumberA, 16807, modA);
  const genB = new Generator(seedNumberB, 48271, modB);
  let matches = 0;
  for (let i = 0; i < numberOfChecks; i++) {
    // tslint:disable-next-line
    const valA = genA.nextValue() & ((1 << 16) - 1);
    // tslint:disable-next-line
    const valB = genB.nextValue() & ((1 << 16) - 1);
    if (valA === valB) {
      matches++;
    }
  }
  return matches;
};

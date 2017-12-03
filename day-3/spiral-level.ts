export const spiralLevel = (inpNumber: number) => {
  if (inpNumber === 0) {
    throw new Error('Input must be greater than 0');
  }
  let ii = 1;
  let level = 0;
  for (let i = 1; i; i += 2) {
    level++;
    ii = i * i;
    if (ii >= inpNumber) {
      return { level: level - 1, i };
    }
  }
};

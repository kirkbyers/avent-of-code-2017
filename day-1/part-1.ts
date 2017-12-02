export const sumConsecutiveInts = (input: string) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) === Number(input[(i + 1) % input.length])) {
      sum += Number(input[i]);
    }
  }
  return sum;
};

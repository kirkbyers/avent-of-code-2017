export const sumMatchingMidInts = (input: string) => {
  let sum = 0;
  const halfLength = input.length / 2;
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) === Number(input[(i + halfLength) % input.length])) {
      sum += Number(input[i]);
    }
  }
  return sum;
};

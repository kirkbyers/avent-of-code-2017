export const spin = (stepSize: number) => {
  const state = [0];
  let currentPosition = 0;
  for (let i = 1; i < 2018; i++) {
    currentPosition = ((currentPosition + stepSize) % state.length) + 1;
    state.splice(currentPosition, 0, i);
  }
  return state[(currentPosition + 1) % state.length];
};

export const spin2 = (stepSize: number) => {
  let zeroNeighbor = 0;
  let currentPosition = 0;
  for (let i = 1; i < 5E7 + 1; i++) {
    currentPosition = ((currentPosition + stepSize) % i) + 1;
    if (currentPosition === 1) {
      zeroNeighbor = i;
    }
  }
  return zeroNeighbor;
};

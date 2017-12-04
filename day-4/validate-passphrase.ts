export const passphraseValid = (passphrase: string) => {
  if (passphrase.length <= 0) {
    return false;
  }
  const words = passphrase.match(/\S+/g) || [];
  const wordMap: { [x: string]: boolean } = {};
  for (const word of words) {
    if (!wordMap.hasOwnProperty(word)) {
      wordMap[word] = true;
    } else {
      return false;
    }
  }
  return true;
};

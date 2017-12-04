interface Anagram { [letter: string]: number; }

export const validPassphrase = (input: string) => {
  if (input.length <= 0) {
    return false;
  }
  const words: string[] = input.match(/\S+/g) || [];
  const anagrams = words.map((word) => {
    const anagram: Anagram = {};
    for (const letter of word) {
      if (anagram[letter] !== undefined) {
        anagram[letter]++;
      } else {
        anagram[letter] = 1;
      }
    }
    return anagram;
  });

  for (let i = 0; i < anagrams.length; i++) {
    const ana1 = anagrams[i];
    for (let j = i + 1; j < anagrams.length; j++) {
      const ana2 = anagrams[j];
      if (anagramsMatch(ana1, ana2)) {
        return false;
      }
    }
  }
  return true;
};

const anagramsMatch = (ana1: Anagram, ana2: Anagram) => {
  const result = { ...ana2 };
  Object.keys(ana1).forEach((key) => {
    if (result[key] !== undefined) {
      result[key] += -1 * ana1[key];
    } else {
      result[key] = -1 * ana1[key];
    }
    if (result[key] === 0) {
      delete result[key];
    }
  });
  if (Object.keys(result).length <= 0) {
    return true;
  }
  return false;
};

import { countSubstrings, sortIndex, filterEnglishWords } from './lib/textOperations.js';
import { params } from './lib/commandLine.js';
import { readFromFile, writeToFile } from './files.js';

export const main = async () => {
  const text = await readFromFile();
  let index = countSubstrings(text, params.threshold, params.minLength, params.maxLength);
  index = sortIndex(index);
  writeToFile(index);
  if (params.englishOnly) {
    index = filterEnglishWords(index);
    writeToFile(index, 'outputFiltered.txt');
  }
  // console.log(index);
};

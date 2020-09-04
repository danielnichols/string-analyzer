import { promises as fsPromises } from 'fs';
import Lodash from 'lodash';
import { stripSymbols } from './lib/stringOperations.js';

const {
  toLower,
} = Lodash;
const { readFile, writeFile } = fsPromises;

/**
 * Reads the list from the file
 */
const readFromFile = async (filename = 'input.txt') => {
  const raw = await readFile(filename, { encoding: 'utf8' });
  const text = stripSymbols(toLower(raw));
  return text;
};

/**
 * Creates a file with a line for each entry
 * @param {object[]} sortedIndex
 * @param {string} filename
 */
const writeToFile = (sortedIndex, filename = 'output.txt') => {
  let output = '';

  sortedIndex.forEach((entry) => {
    output += `${entry.string}: ${entry.count}\n`;
  });

  writeFile(filename, output);
};

export { readFromFile, writeToFile };

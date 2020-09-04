import Lodash from 'lodash';
import EnglishWords from 'an-array-of-english-words';
import { enumerateSubstrings } from './stringOperations.js';

// const EnglishWords = require('an-array-of-english-words');

const {
  words, omitBy, orderBy,
} = Lodash;

/**
 * Counts the number of occurrences of every substring in a text
 * @param {string} text
 * @returns {object[]} Unordered array of objects with keys "string" and "count"
 */
const countSubstrings = (text, threshold = 1, minLength = 0, maxLength = Infinity) => {
  let rawIndex = {};
  words(text).forEach((string) => {
    enumerateSubstrings(string, minLength, maxLength).forEach((substring) => {
      if (rawIndex[substring] === undefined) {
        rawIndex[substring] = 1;
      } else {
        // index[substring] = index[substring] + 1;
        rawIndex[substring]++;
      }
    });
  });

  rawIndex = omitBy(rawIndex, (value) => value < threshold);

  const index = [];
  Object.keys(rawIndex).forEach((key) => {
    const entry = {
      string: key,
      count: rawIndex[key],
    };
    index.push(entry);
  });

  return index;
};

/**
 * Sorts the index
 * @param {object[]} index
 * @param {string} order
 * @param {string} field
 */
const sortIndex = (index = [], order = 'desc', field = 'count') => {
  // const sortedIndex = orderBy(index,['count', 'string'], ['desc', 'asc']);
  const sortedIndex = orderBy(index, [field], [order]);
  return sortedIndex;
};

/**
 * Removes strings that do not match a list of english words
 * @param {object[]} index
 */
const filterEnglishWords = (index = []) => {
  const filteredIndex = index.filter((entry) => {
    if (EnglishWords.includes(entry.string)) return true;
    return false;
  });
  return filteredIndex;
};

export { countSubstrings, sortIndex, filterEnglishWords };

/**
 * Strips any symbol chars from a given string
 * @param {string} str
 * @param {boolean} punctuation
 * @param {boolean} whitespace
 * @param {boolean} linebreaks
 */
const stripSymbols = (str = '', punctuation = true, whitespace = false, linebreaks = false) => {
  let text = str;
  if (punctuation) {
    const pattern = /[!@#$%^&*()_+-={}|:"<>?[\]\\;',./`~]/gi;
    text = text.replace(pattern, '');
  }
  if (whitespace) {
    const pattern = /[ ]/gi;
    text = text.replace(pattern, '');
  }
  if (linebreaks) {
    const pattern = /[\r\n]/gi;
    text = text.replace(pattern, '');
  }
  return text;
};

/**
 * Enumerates all the given substrings for a given string, within the provided bounds
 * @param {string} str A single string to find substrings for. Multiple lines will be treated as a single line
 * @param {number} minLength
 * @param {number} maxLength
 */
const enumerateSubstrings = (str, minLength = 0, maxLength = Infinity) => {
  const strings = [];
  for (let startPos = 0; startPos < str.length; startPos++) {
    for (let endPos = startPos + 1; endPos <= str.length; endPos++) {
      if (endPos - startPos >= minLength && endPos - startPos <= maxLength) { strings.push(str.slice(startPos, endPos)); }
    }
  }
  return strings;
};

export { stripSymbols, enumerateSubstrings };

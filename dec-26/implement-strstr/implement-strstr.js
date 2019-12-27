/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const checkIfNeedle = (index, haystack, needle) => {
  for (let i = 1; i < needle.length; i += 1) {
    if (haystack[index + i] !== needle[i]) {
      return false;
    }
  }
  return true;
};

const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack[i] === needle[0]) {
      if (checkIfNeedle(i, haystack, needle)) {
        return i;
      }
    }
  }
  return -1;
};

export default strStr;

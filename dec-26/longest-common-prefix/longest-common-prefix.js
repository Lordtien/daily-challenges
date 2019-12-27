/**
 * @param {string[]} strs
 * @return {string}
 */

const smaller = (a, b) => (a.length > b.length ? b : a);

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  let comPre = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    let tempPre = '';
    for (let j = 0; j < smaller(comPre, strs[i]).length; j += 1) {
      const currWord = strs[i];
      if (comPre[j] === currWord[j]) {
        tempPre = tempPre.concat(comPre[j]);
      } else {
        if (tempPre === '') {
          return tempPre;
        }
        j = comPre.length;
      }
    }
    comPre = tempPre;
  }
  return comPre;
};

export default longestCommonPrefix;

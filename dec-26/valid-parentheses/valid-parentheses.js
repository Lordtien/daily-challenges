/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (s[i] === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    } else if (s[i] === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isValid;

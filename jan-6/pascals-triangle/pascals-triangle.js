/**
 * @param {number} numRows
 * @return {number[][]}
 */
const genRow = (n, arr) => {
  const row = [1];
  for (let i = 1; i < n - 1; i += 1) {
    row.push(arr[i - 1] + arr[i]);
  }
  row.push(1);
  return row;
};

const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  }
  const triangle = [[1]];
  for (let i = 1; i < numRows; i += 1) {
    triangle.push(genRow(i + 1, triangle[i - 1]));
  }
  return triangle;
};

export default generate;

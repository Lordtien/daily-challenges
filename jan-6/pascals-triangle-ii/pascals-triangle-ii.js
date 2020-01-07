/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const genRow = (n, arr) => {
  const row = [1];
  for (let i = 1; i < n - 1; i += 1) {
    row.push(arr[i - 1] + arr[i]);
  }
  row.push(1);
  return row;
};

const getRow = (rowIndex) => {
  if (rowIndex === 0) {
    return [1];
  }
  let pasTri = [[1]];
  let i = 1;
  while (i <= rowIndex) {
    pasTri = genRow(i + 1, pasTri);
    i += 1;
  }
  return pasTri;
};

export default getRow;

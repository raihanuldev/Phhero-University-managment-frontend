const arr = [2, 3, 4, 5, 6, 7, 8];

const result = arr.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);

console.log(result);

const numbers = [9, 5, 6, 1, 4, 3, 7, 2, 8];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const numbers2 = [9, 5, 6, 96, 15, 1, 18, 4, 3, 7, 26, 2, 8, 52,];
const sortedNumbers2 = numbers2.sort((a, b) => a - b);
console.log(sortedNumbers2);
const sortedRavarse = numbers2.sort((a, b) => a - b).reverse();
console.log(sortedRavarse);


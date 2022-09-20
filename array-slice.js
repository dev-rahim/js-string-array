const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 45, 8, 58, 56, 9, 62, 25, 2, 62];

const numberSliced = numbers.slice(0, 11);
console.log(numberSliced);
console.log(numbers);

const numberSpliced = numbers.splice(11, 15, 500, 1400, 8500);
console.log(numberSpliced);
console.log(numbers);

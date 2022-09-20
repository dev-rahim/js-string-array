function add(num1, num2) {
    let result = 0;
    for (const number of arguments) {
        result += number;
    }
    return result;
}
console.log(add(25, 25, 50, 50));
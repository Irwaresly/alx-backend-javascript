const calculateNumber = require('./1-calcul');

console.log(calculateNumber('SUM', 10.4, 5.7)); // Output: 16
console.log(calculateNumber('SUBTRACT', 10.4, 5.7)); // Output: 5
console.log(calculateNumber('DIVIDE', 10.4, 2)); // Output: 5.2
console.log(calculateNumber('DIVIDE', 10.4, 0)); // Output: 'Error'

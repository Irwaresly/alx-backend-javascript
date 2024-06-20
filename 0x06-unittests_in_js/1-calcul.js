/**
 * Combining descriptions
 * Perform calculation based on the specified type.
 * @param {string} type - Type of operation: SUM, SUBTRACT, DIVIDE.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} - Result of the calculation or 'Error' if division by zero.
 */
function calculateNumber (type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid operation type. Valid types are SUM, SUBTRACT, DIVIDE.');
  }
}

module.exports = calculateNumber;

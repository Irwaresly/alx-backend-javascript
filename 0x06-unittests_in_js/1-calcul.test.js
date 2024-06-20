const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should correctly calculate SUM', function() {
    const result = calculateNumber('SUM', 10.4, 5.7);
    assert.strictEqual(result, 16);
  });

  it('should correctly calculate SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', 10.4, 5.7);
    assert.strictEqual(result, 4);
  });

  it('should correctly calculate DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 10.4, 2);
    assert.strictEqual(result, 5);
  });

  it('should handle division by zero and return Error', function() {
    const result = calculateNumber('DIVIDE', 10.4, 0);
    assert.strictEqual(result, 'Error');
  });

  it('should throw an error for invalid operation type', function() {
    assert.throws(() => {
      calculateNumber('INVALID_OPERATION', 10.4, 5.7);
    }, Error);
  });
});

const calculateNumber = require('./0-calcul');
const assert = require('assert');

/*
  Unit tests for the calculateNumber function
  This function rounds two numbers to the nearest integers and returns their sum.
*/

describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.strictEqual(calculateNumber(4.8, 3), 8);
    assert.strictEqual(calculateNumber(2.3, 6), 8);
    assert.strictEqual(calculateNumber(7.6, 2), 10);
  });

  it('rounding of b', () => {
    assert.strictEqual(calculateNumber(5, 8.2), 13);
    assert.strictEqual(calculateNumber(4, 7.5), 12);
    assert.strictEqual(calculateNumber(1, 2.8), 4);
  });

  it('rounding both a and b', () => {
    assert.strictEqual(calculateNumber(5.7, 8.9), 15);
    assert.strictEqual(calculateNumber(3.3, 7.2), 10);
    assert.strictEqual(calculateNumber(1.6, 2.4), 4);
  });

  it('rounding of negative numbers', () => {
    assert.strictEqual(calculateNumber(-4.5, 5), 1);
    assert.strictEqual(calculateNumber(-3.7, -2), -6);
    assert.strictEqual(calculateNumber(3, -6.6), -4);
  });

  it('handling of zero values', () => {
    assert.strictEqual(calculateNumber(0, 9.7), 10);
    assert.strictEqual(calculateNumber(7.4, 0), 7);
    assert.strictEqual(calculateNumber(0, -3.3), -3);
  });

  it('handling of large numbers', () => {
    assert.strictEqual(calculateNumber(1e5, 1e5), 2e5);
    assert.strictEqual(calculateNumber(1e6, -1e6), 0);
    assert.strictEqual(calculateNumber(-1e4, -1e4), -2e4);
  });
})

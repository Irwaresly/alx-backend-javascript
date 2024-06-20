// Use dynamic import() for chai
import('chai').then(chai => {
  const { expect } = chai.default || chai;
  const calculateNumber = require('./2-calcul_chai');

  describe('calculateNumber', function () {
    it('should correctly calculate SUM', function () {
      const result = calculateNumber('SUM', 10.4, 5.7);
      expect(result).to.equal(16);
    });

    it('should correctly calculate SUBTRACT', function () {
      const result = calculateNumber('SUBTRACT', 10.4, 5.7);
      expect(result).to.equal(4);
    });

    it('should correctly calculate DIVIDE', function () {
      const result = calculateNumber('DIVIDE', 10.4, 2);
      expect(result).to.equal(5);
    });

    it('should handle division by zero and return Error', function () {
      const result = calculateNumber('DIVIDE', 10.4, 0);
      expect(result).to.equal('Error');
    });

    it('should throw an error for invalid operation type', function () {
      expect(() => {
        calculateNumber('INVALID_OPERATION', 10.4, 5.7);
      }).to.throw(Error);
    });
  });
}).catch(err => {
  console.error('Error loading chai:', err);
});

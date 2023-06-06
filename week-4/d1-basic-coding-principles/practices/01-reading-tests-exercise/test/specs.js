const chai = require('chai');
const expect = chai.expect;
const { isFive, isOdd, myRange } = require('../funcs');

describe('isFive(num)', () => {
  it('should return true if the num is 5 otherwise false', () => {
    //Arrange
    const num1 = 5;

    // Act
    const actual1 = isFive(num1); // should be true

    // Assert
    expect(actual1).to.be.true;
    // expect(isFive(num1)).to.be.true;

    // Arrange
    const otherInput = 'not 5';
    const num2 = 4;

    // Act
    const actual2 = isFive(num2); // should be false
    const actual3 = isFive(otherInput); // should be false

    // Assert
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });
});

describe('isOdd(number)', () => {
  it('should return true if number is odd', () => {
    // Arrange
    const num1 = 3;
    const num2 = 2953;
    const num3 = -999;

    // Act
    const actual1 = isOdd(num1); // should be true
    const actual2 = isOdd(num2); // should be true
    const actual3 = isOdd(num3); // should be true

    // Assert
    expect(actual1).to.be.true;
    expect(actual2).to.be.true;
    expect(actual3).to.be.true;
  });

  it('should return false if the num is even', () => {
    // Arrange
    const num1 = 4;
    const num2 = 2952;
    const num3 = -998;

    // Act
    const actual1 = isOdd(num1); // should be false
    const actual2 = isOdd(num2); // should be false
    const actual3 = isOdd(num3); // should be false

    // Assert
    expect(actual1).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
    // expect(isOdd(8)).to.be.false;
  });

  it('should throw an error if num is not type of Number', () => {
    // Arrange
    const string = 'i am a string';
    const object = { i: 'am', an: 'object' };
    const array = ['i', 'am', 'an', 'array'];

    // Act & Assert
    expect(() => isOdd(string)).to.throw(Error);
    expect(() => isOdd(object)).to.throw(Error);
    expect(() => isOdd(array)).to.throw(Error);
  });
});

describe('myRange(min, max, step)', () => {
  context('if step is not provided', () => {
    it('should return the correct array with default value step=1', () => {
      // Arrange
      const [min1, max1] = [0, 5];
      const [min2, max2] = [6, 3];
      const expected1 = [0, 1, 2, 3, 4, 5];
      const expected2 = [];

      // Act
      const actual1 = myRange(min1, max1);
      const actual2 = myRange(min2, max2);

      // Assert          equal ===   eql ==
      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
    });
  });

  context('if step is provided', () => {
    it('should return the correct array', () => {
      // Arrange
      const [min1, max1, step1] = [0, 5, 1];
      const [min2, max2, step2] = [0, 5, 2];
      const [min3, max3, step3] = [9, 5, 2];

      // Act
      const actual1 = myRange(min1, max1, step1);
      const expected1 = [0, 1, 2, 3, 4, 5];
      const actual2 = myRange(min2, max2, step2);
      const expected2 = [0, 2, 4];
      const actual3 = myRange(min3, max3, step3);
      const expected3 = [];

      // Assert
      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
    });
  });
});

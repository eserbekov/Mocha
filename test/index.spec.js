const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, dif, concat, isAdult, comparison, power, arrayEvenNumber} = require('../index.js');

describe('function sum', () => {
  it('should function sum(2, 4) equals 6', () => {
    // assert.equal(sum(2, 4), 6);
    expect(sum(2, 4)).eq(6);
  });

  it('should function sum not equals 0', () => {
    // assert.notEqual(sum(2, 4), 0);
    expect(sum(2, 4)).not.eq(0);
  });
});

describe('function mult', () => {
  it('should function mult works correct', () => {
    // assert.equal(mult(2, 4), 8);
    expect(mult(2, 4)).eq(8);
  });
  it('should function mult works incorrectly', () => {
    // assert.notEqual(mult(2,4),6);
    expect(mult(2, 4)).not.eq(6);
  });
});

it('should function dif(2, 4) equals -2', () => {
  // assert.equal(dif(2,4), -2);
  expect(dif(2, 4)).eq(-2);
});

// Тест функции concat
describe('function concat', () => {
  it('should correct concat number and string', () => {
    // assert.equal(concat(10, 'orange'), '10orange');
    expect(concat(10, 'orange')).eq('10orange');
  });

  it('should correct concat string and string', () => {
    // assert.equal(concat('fruit', 'orange'), 'fruitorange');
    expect(concat('fruit', 'orange')).eq('fruitorange');
  });

  it('should not correct concat number and number', () => {
    // assert.equal(concat(10, 20), undefined);
    expect(concat(10, 20)).eq(undefined);
  });

  it('should not correct concat array and string', () => {
    // assert.equal(concat([], 'array'), undefined);
    expect(concat([], 'array')).eq(undefined);
  });

  it('should not correct concat object and number', () => {
    // assert.equal(concat({}, 1), undefined);
    expect(concat({}, 1)).eq(undefined);
  });
});

describe('function isAdult', () => {
  it('should person is Adult', () => {
    // assert.equal(isAdult(40), 'Adult');
    expect(isAdult(40)).eq('Adult');
  });
  it('should age equal 15 does not fill the bill', () => {
    // assert.equal(isAdult(15), `Your age does not fill the bill`);
    expect(isAdult(15)).eq('Your age does not fill the bill');
  });
  it('should function isAdult contains boundary variable equal 18', () => {
    // assert.equal(isAdult(18), 'Adult');
    expect(isAdult(18)).eq('Adult');
  });
  it('should function isAdult contains boundary variable equal 65', () => {
    // assert.equal(isAdult(65), 'Adult');
    expect(isAdult(65)).eq('Adult');
  });
  it('should age equal 66 does not fill the bill', () => {
    // assert.equal(isAdult(66), `Your age does not fill the bill`);
    expect(isAdult(66)).eq('Your age does not fill the bill');
  });
});
// Тестирование функции сравнения
describe('function comparison', () => {
  it('should function comparison is True', () => {
    // assert.equal(comparison(5, 10), true);
    expect(comparison(5, 10)).true;
  });
  it('should function comparison number and string', () => {
    // assert.equal(comparison(5, '10'), true);
    expect(comparison(5, '10')).true;
  });
  it('should function comparison string and string', () => {
    // assert.equal(comparison('5', '10'), true);
    expect(comparison('5', '10')).true;
  });
  it('should function comparison is False', () => {
    // assert.equal(comparison(5, '5'), false);
    expect(comparison(5, '5')).false;
  });
});
// Тестирование функции возведения в степень
describe('function power', () => {
  it('should return null', () => {
    // assert.equal(power(0,3), null);
    expect(power(0, 3)).null;
  });
  it('should return 1', () => {
    // assert.equal(power(10,0), 1);
    expect(power(10, 0)).eq(1);
  });
  it('should function power return number to power', () => {
    // assert.equal(power(3,3), 27);
    expect(power(3, 3)).eq(27);
  });
  it('variable pow is not integer ', () => {
    // assert.equal(power(3,0.5), 1.73);
    expect(power(3, 0.5)).eq(1.73);
  });
  it('variable pow is not natural number ', () => {
    // assert.equal(power(2,-2), 0.25);
    expect(power(2, -2)).eq(0.25);
  });
});

//Тест функции массив четных чисел
describe('function arrayEvenNumber', () => {
  it('function arrayEvenNumber return array [2,6]', () => {
    // assert.deepEqual(arrayEvenNumber([2,'green', '3', 6, 0]),[2,6]);
    expect(arrayEvenNumber([2, 'green', '3', 6, 0])).deep.eq([2, 6]);
  });
  it('function arrayEvenNumber return []', () => {
    // assert.deepEqual(arrayEvenNumber([]), []);
    expect(arrayEvenNumber([])).deep.eq([]);
  });
  it('function arrayEvenNumber not even numbers', () => {
    // assert.deepEqual(arrayEvenNumber([1,-2,'8','five',{}]), []);
    expect(arrayEvenNumber([1, -2, '8', 'five', {}])).deep.eq([]);
  });
  it('function arrayEvenNumber not array', () => {
    // assert.deepEqual(arrayEvenNumber(4), []);
    expect(arrayEvenNumber(4)).deep.eq([]);
  });
});
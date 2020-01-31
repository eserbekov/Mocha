const assert = require("assert");
const {sum, mult, dif, concat, isAdult, comparison, power} = require('../index.js');

describe('function sum', () => {
    it('should function sum(2, 4) equals 6', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
    });
});

describe('function mult',() => {
    it('should function mult works correct', () => {
        assert.equal(mult(2, 4), 8);
    });
    it('should function mult works incorrectly', () => {
        assert.notEqual(mult(2,4),6);
    });
});

it('should function dif(2, 4) equals -2',() => {
    assert.equal(dif(2,4), -2)
});

// Тест функции concat
describe('function concat',() => {
    it('should correct concat number and string', () => {
        assert.equal(concat(10, 'orange'), '10orange');
    });

    it('should correct concat string and string', () => {
        assert.equal(concat('fruit', 'orange'), 'fruitorange');
    });

    it('should not correct concat number and number', () => {
        assert.equal(concat(10, 20), undefined);
    });

    it('should not correct concat array and string', () => {
        assert.equal(concat([], 'array'), undefined);
    });

    it('should not correct concat object and number', () => {
        assert.equal(concat({}, 1), undefined);
    });
});

describe('function isAdult',() => {
    it('should person is Adult', () => {
        assert.equal(isAdult(40), 'Adult')
    });
    it('should age does not fill the bill', () => {
        assert.equal(isAdult(15), `Your age does not fill the bill`)
    });
    it('should function isAdult contains boundary variable',() => {
        assert.equal(isAdult(18), 'Adult')
    });
});
// Тестирование функции сравнения
describe ('function comparison', () => {
    it('should function comparison is True', () => {
        assert.equal(comparison(5, 10), true)
    });
    it('should function comparison number and string', () => {
        assert.equal(comparison(5, '10'), true)
    });
    it('should function comparison string and string', () => {
        assert.equal(comparison('5', '10'), true)
    });
    it('should function comparison is False', () => {
        assert.equal(comparison(5, '5'), false)
    });
});
// Тестирование функции возведения в степень
describe('function power',() => {
   it('should return undefined', () => {
       assert.equal(power(0,3), undefined)
   });
    it('should return 1', () => {
        assert.equal(power(10,0), 1)
    });
    it('should function power return number to power', () => {
        assert.equal(power(3,3), 27)
    });
    it('variable pow is not integer ', () => {
        assert.equal(power(3,0.5), 1.73)
    });
    it('variable pow is not natural number ', () => {
        assert.equal(power(2,-2), 0.25)
    });
});
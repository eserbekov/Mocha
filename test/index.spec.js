const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, dif, concat, isAdult} = require('../index.js');

describe('function sum', () => {
    it('should function sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
        expect(sum(2, 4)).eq(6);
    });

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0)
    });
});


it('should function mult works correct', () => {
    assert.equal(mult(2, 4), 8);
});

it('should function dif equals -2',() => {
    assert.equal(dif(2,4), -2)
});

// Homework
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
        // assert.equal(concat({}, 1), undefined);
        expect(concat({},1)).undefined;
    });
});

describe('function isAdult',() => {
    it('should person is Adult', () => {
        assert.equal(isAdult(40), 'Adult')
    });
    it('should age does not fill the bill', () => {
        assert.equal(isAdult(15), `Your age does not fill the bill`)
    });
});
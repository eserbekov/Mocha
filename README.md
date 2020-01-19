# Mocha
#### test
```javascript
const assert = require("Assert");
const {sum, mult, dif} = require('../index.js');

describe('function sum', () => {
    it('should function sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0)
    });
});


it('should function mult works correct', () => {
    assert.equal(mult(2, 4), 8)
});

it('should function dif equals -2',() => {
    assert.equal(dif(2,4), -2)
});
```
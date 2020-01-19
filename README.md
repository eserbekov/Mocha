# Mocha
#### test
```javascript
const assert = require("Assert");
const {sum} = require('../index.js');

describe('function sum', () => {
    it('should function sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0)
    });
});
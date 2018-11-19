function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
let assert = require("chai").assert;
describe('isOddOrEven', function () {
    it('should return undefined with a number parameter', function () {
        let result = isOddOrEven(13);
        assert.isUndefined(result, "Function did not return correct result");
    });
    it('should return undefined with a object parameter', function () {
        let result = isOddOrEven({name: "Pesho"});
        assert.isUndefined(result, "Function did not return correct result");
    });
    it('should return "even" with even length string', function () {
        let result = isOddOrEven("Pepi");
        assert.equal(result, "even", "Function did not return correct result");
    });
    it('should return "odd" with odd length string', function () {
        let result = isOddOrEven("Pepsi");
        assert.equal(result, "odd", "Function did not return correct result");
    });
    it('should return correct values with multiple consecutive checks', function () {
        let result = isOddOrEven("alabala");
        assert. equal(result, "odd", "Function did not return correct result");
        result = isOddOrEven("cat");
        assert.equal(result, "odd", "Function did not return correct result");
        result = isOddOrEven("it is even");
        assert.equal(result, "even", "Function did not return correct result");
    });
});

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}
let assert = require("chai").assert;
describe("lookupChar", function () {
    describe("Input parameters tests", function () {
        it('should return undefined with non-string first parameter', function () {
            let result = lookupChar(1, 0);
            assert.isUndefined(result);
        });
        it('should return undefined with non-integer second parameter', function () {
            let result = lookupChar("string", "non-integer");
            assert.isUndefined(result);
        });
        it('should return undefined with floating-point number as second parameter', function () {
            let result = lookupChar("string", 3.5);
            assert.isUndefined(result);
        });
    });

    describe("Index correctness tests", function () {
        it('should return "Incorrect index" if index is equal to string length', function () {
            let result = lookupChar("string", 6);
            assert.equal(result, "Incorrect index");
        });
        it('should return "Incorrect index" if index is greater than string length', function () {
            let result = lookupChar("string", 7);
            assert.equal(result, "Incorrect index");
        });
        it('should return "Incorrect index" if index is negative number', function () {
            let result = lookupChar("string", -7);
            assert.equal(result, "Incorrect index");
        });
    });

    describe("Correct results test", function () {
        it('should return correct result with correct parameters', function () {
            let result = lookupChar("string", 0);
            assert.equal(result, "s");
        });
        it('should return correct result with correct parameters', function () {
            let result = lookupChar("Pesho", 1);
            assert.equal(result, "e");
        });
    });
});
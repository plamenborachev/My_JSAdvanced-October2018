let assert = require("chai").assert;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe("mathEnforcer", function () {
   describe("addFive", function () {
       it('should return undefined with non-number parameter', function () {
           let result = mathEnforcer.addFive("string");
           assert.isUndefined(result);
       });
       it('should return correct result with integer', function () {
           let result = mathEnforcer.addFive(5);
           assert.equal(result, 10);
       });
       it('should return correct result with negative integer', function () {
           let result = mathEnforcer.addFive(-5);
           assert.equal(result, 0);
       });
       it('should return correct result with floating-point number', function () {
           let result = mathEnforcer.addFive(-5.5);
           assert.equal(result, -0.5);
       });
   });
    describe("subtractTen", function () {
        it('should return undefined with non-number parameter', function () {
            let result = mathEnforcer.subtractTen("string");
            assert.isUndefined(result);
        });
        it('should return correct result with integer', function () {
            let result = mathEnforcer.subtractTen(5);
            assert.equal(result, -5);
        });
        it('should return correct result with negative integer', function () {
            let result = mathEnforcer.subtractTen(-5);
            assert.equal(result, -15);
        });
        it('should return correct result with floating-point number', function () {
            let result = mathEnforcer.subtractTen(-5.5);
            assert.equal(result, -15.5);
        });
    });
    describe("sum", function () {
        it('should return undefined with non-number first parameter', function () {
            let result = mathEnforcer.sum("string", 1);
            assert.isUndefined(result);
        });
        it('should return undefined with non-number second parameter', function () {
            let result = mathEnforcer.sum(1, "string");
            assert.isUndefined(result);
        });
        it('should return correct result with integers', function () {
            let result = mathEnforcer.sum(5, 5);
            assert.equal(result, 10);
        });
        it('should return correct result with negative integers', function () {
            let result = mathEnforcer.sum(-5, -5);
            assert.equal(result, -10);
        });
        it('should return correct result with floating-point numbers', function () {
            let result = mathEnforcer.sum(-5.5, 6.6);
            assert.closeTo(result, 1.1, 0.01);
        });
    });
});
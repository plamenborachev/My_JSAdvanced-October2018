let Calculator = require("./Calculator");
let assert = require("chai").assert;

describe("Calculator", function () {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });
    describe("initialization tests", function () {
        it('should return 0 for expenses length', function () {
            assert.equal(calculator.expenses.length, 0);
        });
    });
    describe("add(data)", function () {
        it('should return 1 expenses length for 1 added item', function () {
            calculator.add(10);
            assert.equal(calculator.expenses.length, 1);
        });
        it('should return 2 expenses length for 2 added item', function () {
            calculator.add(10);
            calculator.add("Pesho");
            assert.equal(calculator.expenses.length, 2);
        });
        // it('should return 3 expenses length for 3 added item  ', function () {
        //     calculator.add(10);
        //     calculator.add("Pesho");
        //     calculator.add("5");
        //     assert.equal(calculator.expenses.length, 3);
        // });
    });
    describe("divideNums()", function () {
        it('should throw an error if there are no numbers added', function () {
            calculator.add("Pesho");
            calculator.add("Pesho");
            calculator.add("Pesho");
            assert.throws(() => {calculator.divideNums()});
        });
        // it('should return corect result if there are numbers added', function () {
        //     calculator.add(10);
        //     calculator.add("Pesho");
        //     calculator.add(10);
        //     assert.equal(calculator.divideNums(), 1);
        //     assert.equal(calculator.expenses, 1);
        // });
        it('should return message if there is Zero added', function () {
            calculator.add(10);
            calculator.add(0);
            assert.equal(calculator.divideNums(), "Cannot divide by zero");
        });
    });
    describe("toString()", function () {
        it('should return \'empty array\' message on new instance', function () {
            assert.equal(calculator.toString(), "empty array");
        });
        // it('should return correct result', function () {
        //     calculator.add(10);
        //     calculator.add("Pesho");
        //     calculator.add("5");
        //     assert.equal(calculator.toString(), "10 -> Pesho -> 5");
        // });
    });
    describe("orderBy()", function () {
        // it('should return \'empty\' message on new instance', function () {
        //     assert.equal(calculator.orderBy(), "empty");
        // });
        it('should return correct result for numbers', function () {
            calculator.add(10);
            calculator.add(5);
            calculator.add(1);
            assert.equal(calculator.orderBy(), "1, 5, 10");
        });
    });
});
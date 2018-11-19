let HolidayPackage = require("./HolidayPackage");
let assert = require("chai").assert;

describe("HolidayPackage", function () {
    let holidayPackage;
    beforeEach(() => {
        holidayPackage = new HolidayPackage('Italy', 'Summer');
    });
    describe("constructor tests", function () {
        it('should be instantiated with two parameters', function () {
            assert.equal(holidayPackage.destination, "Italy");
            assert.equal(holidayPackage.season, "Summer");
        });
    });
    describe("insuranceIncluded tests", function () {
        it('should return false for new instance', function () {
            assert.isFalse(holidayPackage.insuranceIncluded);
        });
        //TODO tests throwing errors
        it('should throw new Error for non-boolean value', function () {
            assert.throws(() => {holidayPackage.insuranceIncluded = "true"});
        });
        it('should return true for setting true', function () {
            holidayPackage.insuranceIncluded = true;
            assert.isTrue(holidayPackage.insuranceIncluded);
        });
    });
    describe('showVacationers tests', function () {
        it('should return "No vacationers are added yet" for new instance', function () {
            assert.equal(holidayPackage.showVacationers(), "No vacationers are added yet");
        });
        it('should return correct output for one added vacantioner', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            // holidayPackage.addVacationer('Petar Petrov');
            // holidayPackage.addVacationer('Georgi Georgiev');
            assert.equal(holidayPackage.showVacationers(), "Vacationers:\nIvan Ivanov");
        });
        it('should return correct output for three added vacantioners', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            assert.equal(holidayPackage.showVacationers(), "Vacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev");
        });
    });
    describe("addVacationer tests", function () {
        it('should throw an error in case of empty string', function () {
            assert.throws(() => {holidayPackage.addVacationer(' ')});
        });
        it('should throw an error in case of non-string name', function () {
            assert.throws(() => {holidayPackage.addVacationer(77)});
        });
        it('should throw an error in case of one name input', function () {
            assert.throws(() => {holidayPackage.addVacationer("Ivan")});
        });
        it('should return 0 length for new instance', function () {
            assert.equal(holidayPackage.vacationers.length, 0);
        });
        it('should return 1 length for one added vacantioner', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            // holidayPackage.addVacationer('Petar Petrov');
            // holidayPackage.addVacationer('Georgi Georgiev');
            assert.equal(holidayPackage.vacationers.length, 1);
        });
        it('should return 3 length for three added vacantioner', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            assert.equal(holidayPackage.vacationers.length, 3);
        });
    });
    describe("generateHolidayPackage tests", function () {
        it('should throw an error in case that there are no vacationers', function () {
            assert.throws(() => {holidayPackage.generateHolidayPackage()});
        });
        it('should return correct result for summer/winter and insurance', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.insuranceIncluded = true;
            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1500");
        });
        it('should return correct result for non-summer/winter and insurance', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.season = "Spring";
            holidayPackage.insuranceIncluded = true;
            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1300");
        });
        it('should return correct result for summer/winter and no insurance', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1400");
        });
        it('should return correct result for non-summer/winter and no insurance', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            holidayPackage.season = "Spring";
            assert.equal(holidayPackage.generateHolidayPackage(), "Holiday Package Generated\n" +
                "Destination: Italy\n" +
                "Vacationers:\n" +
                "Ivan Ivanov\n" +
                "Petar Petrov\n" +
                "Georgi Georgiev\n" +
                "Price: 1200");
        });
    })
});
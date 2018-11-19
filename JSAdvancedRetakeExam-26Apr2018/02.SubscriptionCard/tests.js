let SubscriptionCard = require("./SubscriptionCard");
let assert = require("chai").assert;

describe("subscriptionCard", function () {
    let card;
    beforeEach(() => {
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });
    describe("Constructor tests", function () {
        it("should be instantiated with three parameters", function () {
            assert.equal(card.firstName, 'Pesho');
            assert.equal(card.lastName, 'Petrov');
            assert.equal(card.SSN, '00000000');
        });
    });
    describe("isBlocked tests", function () {
        it("should find out if the card initially is blocked", function () {
            let isBlocked = card.isBlocked;
            assert.isFalse(isBlocked);
        });
        it("should return true if the card is blocked", function () {
            card.block();
            let isBlocked = card.isBlocked;
            assert.isTrue(isBlocked);
        });
        it("should return false if the card is blocked and then unblocked", function () {
            card.block();
            card.unblock();
            let isBlocked = card.isBlocked;
            assert.isFalse(isBlocked);
        });
        it("should return false if the card is unblocked and then blocked", function () {
            card.unblock();
            card.block();
            let isBlocked = card.isBlocked;
            assert.isTrue(isBlocked);
        });
    });
    describe("addSubscription tests", function () {
        // it("should subscriptions be empty on new card", function () {
        //     assert.equal(card._subscriptions.length, 0);
        // });
        it("should add an entry in the subscriptions", function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card._subscriptions.length, 1);
        });
        it("should add an entry in the subscriptions with start and end date", function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card._subscriptions.length, 1);
            assert.strictEqual(card._subscriptions[0].line, "120");
            assert.deepEqual(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.deepEqual(card._subscriptions[0].endDate, new Date('2018-05-21'));
        });
        it("should add entries in the subscriptions with start and end date", function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card._subscriptions.length, 1);
            assert.strictEqual(card._subscriptions[0].line, "120");
            assert.deepEqual(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.deepEqual(card._subscriptions[0].endDate, new Date('2018-05-21'));

            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            assert.equal(card._subscriptions.length, 2);
            assert.strictEqual(card._subscriptions[1].line, "*");
            assert.deepEqual(card._subscriptions[1].startDate, new Date('2018-05-25'));
            assert.deepEqual(card._subscriptions[1].endDate, new Date('2018-06-24'));
        });
    });
    describe("isValid tests", function () {
        it("should return false on blocked card", function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            assert.isFalse(card.isValid('120', new Date('2018-04-22')));
        });
        it("should return true on valid card", function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.isTrue(card.isValid('120', new Date('2018-04-22')));
            assert.isTrue(card.isValid('120', new Date('2018-04-23')));
            assert.isTrue(card.isValid('120', new Date('2018-05-20')));
            assert.isTrue(card.isValid('120', new Date('2018-05-21')));
        });
    });
    describe("block tests", function () {
        it("should return true on blocked card", function () {
            card.block();
            assert.isTrue(card.isBlocked);
        });
    });
    describe("unblock tests", function () {
        it("should return false on unblocked card", function () {
            card.unblock();
            assert.isFalse(card.isBlocked);
        });
    });
    describe("firstName, lastName and SSN must not be changed tests", function () {
        it("should return false on unblocked card", function () {
            card.firstName = 'Gosho';
            card.lastName = 'Goshov';
            card.SSN = '111111111';
            assert.equal(card.firstName, 'Pesho');
            assert.equal(card.lastName, 'Petrov');
            assert.equal(card.SSN, '00000000');
        });
    });
});
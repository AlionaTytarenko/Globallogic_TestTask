describe("Nearest found day", function() {

    it("Thursday is the nearest found day", function() {
        assert.equal(nearestFoundDay([-2, 7, -67, 90, 4, 3, 0]), 'Thursday');
    });

    describe("throw exception on invalid size", function() {

        let invalidValue = [[7, -67, 90, 4, 3, 0], [5, 7, 2, 9, 4, 3, 0, 54, 9], NaN, 'text', Infinity, -Infinity];

        function makeTestForSize(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => nearestFoundDay(x), 'Invalid size of array');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTestForSize(invalidValue[i]);
        }

    });

    describe("throw exception on invalid value", function() {

        let invalidValue = [[7, -67, 90, null, 3, 0, 1], [5, 7, 'text', 9, 4, 3, 0], [1, 2, 3, 4, 5, 6, NaN], [1, 2, 3, 4, 5, 6, Infinity], [1, 2, 3, 4, 5, 6, -Infinity]];

        function makeTestForValue(x) {
            it(`${x} throws exception`, function() {
                assert.throws(() => nearestFoundDay(x), 'Invalid temperature');
            });
        }

        for (let i = 0; i < invalidValue.length; i++) {
            makeTestForValue(invalidValue[i]);
        }

    });
});

'use strict';

describe('filter', function () {

    beforeEach(module('phonecatFilters'));

    describe('checkmark', function () {
        it('should convert boolean values to unicode checkmark or cross',
            inject(function (checkmarkFilter) {
                expect(checkmarkFilter(true)).toBe(TICK);
                expect(checkmarkFilter(false)).toBe(CROSS);
            }));
    });
});

'use strict';

var TICK = '\u2713';
var CROSS = '\u2718';

/* Filters */

angular.module('phonecatFilters',
    []).filter('checkmark', function () {
        return function (input) {
            return input ? TICK : CROSS;
        };
    });

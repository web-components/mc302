'use strict';

var Statistics;
Statistics = new Component('./statistics.js');

Statistics.listen('AskEvent', function () {});

Statistics.listen('RepeatedAskEvent', function () {});
'use strict';

var Enquirer;
Enquirer = new Component('./enquirer/maze.js');

Enquirer.extend('./enquirer/interface.js');

Enquirer.install(function (done) {
  this.discover = function () {
    return [0, 0];
  }.bind(this);
  done();
});

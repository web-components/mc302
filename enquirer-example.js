'use strict';

var Enquirer;
Enquirer = new Component('./enquirer-example.js');

Enquirer.extend('./enquirer.js');

Enquirer.install(function (done) {
  this.discover = function () {
    return 'tiranossauro';
  }.bind(this);
  done();
});

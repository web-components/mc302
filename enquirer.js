'use strict';

var Enquirer;
Enquirer = new Component('./enquirer.js');

Enquirer.require('IKnowledgeBase', function (kb, done) {
  this.knowledgeBase = kb;
  done();
});

Enquirer.require('IResponder', function (responder, done) {
  this.responder = responder;
  done();
});

Enquirer.provide('IEnquirer', function (done) {
  done({
    'discover' : this.discover
  });
});

Enquirer.install(function (done) {
  this.discover = function () {
    console.warn('unimplemented');
    return false;
  }.bind(this);

  done();
});

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
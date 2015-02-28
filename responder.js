'use strict';

var Responder;
Responder = new Component('./responder.js');

Responder.require('IKnowledgeBase', function (kb, done) {
  this.knowledgeBase = kb;
  done();
});

Responder.provide('IResponder', function (done) {
  done({
    'ask'         : this.ask,
    'finalAnswer' : this.finalAnswer
  });
});

Responder.publish('AskEvent');

Responder.publish('RepeatedAskEvent');

Responder.install(function (done) {
  this.ask = function () {}.bind(this);

  done();
});

Responder.install(function (done) {
  this.finalAnswer = function () {}.bind(this);

  done();
});
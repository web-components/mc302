'use strict';

var Responder;
Responder = new Component('./responder/interface.js');

Responder.require('IKnowledgeBase', function (kb, done) {
  this.knowledgeBase = kb;
  done();
});

Responder.provide('IResponder', function (done) {
  done({'ask' : this.ask});
});

Responder.provide('IResponderSetup', function (done) {
  done({'finalAnswer' : this.setFinalAnswer});
});

Responder.publish('AskEvent');

Responder.install(function (done) {
  this.ask = function () {
    console.warn('unimplemented');
    return false;
  }.bind(this);

  this.setFinalAnswer = function () {
    console.warn('unimplemented');
    return false;
  }.bind(this);

  done();
});

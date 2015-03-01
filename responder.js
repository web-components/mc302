'use strict';

var Responder;
Responder = new Component('./responder.js');

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
  var answer;

  this.ask = function (question) {
    this.AskEvent(question);
    return this.knowledgeBase.retrieve(answer)[question];
  }.bind(this);

  this.setFinalAnswer = function (val) {
    answer = val;
  }.bind(this);

  done();
});

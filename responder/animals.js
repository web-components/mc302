'use strict';

var Responder;
Responder = new Component('./responder/animals.js');

Responder.extend('./responder/interface.js');

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

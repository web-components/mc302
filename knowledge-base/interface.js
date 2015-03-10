'use strict';

var KnowledgeBase;
KnowledgeBase = new Component('./knowledge-base/interface.js');

KnowledgeBase.provide('IKnowledgeBase', function (done) {
  done({'list' : this.list.bind(this), 'retrieve' : this.retrieve.bind(this), 'answer' : this.answer.bind(this)});
});

KnowledgeBase.install(function (done) {
  this.knowledge = [];

  this.questions = {};

  this.answers = {};

  done();
});

KnowledgeBase.install(function (done) {
  this.list = function () {
    return this.knowledge;
  }.bind(this);

  this.retrieve = function (knowledge) {
    return this.questions[knowledge];
  }.bind(this);

  this.answer = function (knowledge) {
    return this.answers[knowledge];
  };

  done();
});

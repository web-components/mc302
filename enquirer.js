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
    //console.warn('unimplemented');
    var animals, questions, i, question, isTheAnimal;
    animals = this.knowledgeBase.list();
    for (i = 0; i < animals.length; i++) {
      isTheAnimal = true;
      questions = this.knowledgeBase.retrieve(animals[i]);
      for (question in questions) {
        if (this.responder.ask(question) !== questions[question]) isTheAnimal = false;
      }
      if (isTheAnimal) return animals[i];
    }
    return false;
  }.bind(this);

  done();
});

'use strict';

var Enquirer;
Enquirer = new Component('./enquirer-example.js');

Enquirer.extend('./enquirer.js');

Enquirer.install(function (done) {
  this.discover = function () {
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

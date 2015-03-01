'use strict';

var Orchestrator;
Orchestrator = new Component('./orchestrator.js');

Orchestrator.require('IKnowledgeBase', function (kb, done) {
  this.knowledgeBase = kb;
  done();
});

Orchestrator.require('IResponderSetup', function (responder, done) {
  this.responder = responder;
  done();
});

Orchestrator.require('IEnquirer', function (enquirer, done) {
  this.enquirer = enquirer;
  done();
});

Orchestrator.start(function (done) {
  var animals, i, response;
  animals = this.knowledgeBase.list();
  for (i = 0; i < animals.length; i++) {
    this.responder.finalAnswer(animals[i]);
    response = this.enquirer.discover();
    if (response !== animals[i]) console.log('errou', animals[i], response);
  }
  done();
});

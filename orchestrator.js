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

Orchestrator.require('IStatisticsSetup', function (statistics, done) {
  this.statistics = statistics;
  done();
});

Orchestrator.start(function (done) {
  this.knowledgeBase.list().forEach(function (knowledge) {
    this.responder.finalAnswer(knowledge);
    this.statistics.finalAnswer(this.knowledgeBase.answer(knowledge), knowledge);
    this.statistics.printReport(this.enquirer.discover());
  }.bind(this));
  done();
});

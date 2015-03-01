'use strict';

var Statistics;
Statistics = new Component('./statistics.js');

Statistics.provide('IStatisticsSetup', function (done) {
  done({
    'finalAnswer' : this.setFinalAnswer,
    'printReport' : this.printReport
  });
});

Statistics.listen('AskEvent', function (evt) {
  var question;
  question = evt.detail;
  this.asked++;
  if (this.questions[question]) this.repeatedQuestion++;
  this.questions[question] = true;
});

Statistics.install(function (done) {
  this.setFinalAnswer = function (answer) {
    this.answer = answer;
    this.questions = {};
    this.repeatedQuestion = 0;
    this.asked = 0;
  }.bind(this);

  this.printReport = function (answer) {
    this.element.innerHTML += [
      '<p>',
      this.answer,
      'foram realizadas ' + this.asked + ' perguntas',
      'foram repetidas ' + this.repeatedQuestion + ' perguntas',
      answer === this.answer ? '<font color="green">resposta certa</font>' : '<font color="red">resposta errada</font>',
      '</p>'
    ].join('<br>');
  }.bind(this);

  done();
});

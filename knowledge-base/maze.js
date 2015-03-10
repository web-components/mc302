'use strict';

var KnowledgeBase;
KnowledgeBase = new Component('./knowledge-base/maze.js');

KnowledgeBase.extend('./knowledge-base/interface.js');

KnowledgeBase.install(function (done) {
  this.knowledge = ['mordor', 'dummy'];

  this.questions = {
    'mordor' : [
      ['#', 'e', '#', '#', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', '#', ' ', '#'],
      ['#', '#', ' ', ' ', '#'],
      ['#', '#', 's', '#', '#']
    ],
    'dummy' : [
      ['s', ' ', ' ', ' ', 'e']
    ]
  };

  this.answers = {
    'mordor' : [4, 2],
    'dummy'  : [0, 0]
  };

  done();
});

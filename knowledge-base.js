'use strict';

var KnowledgeBase;
KnowledgeBase = new Component('./knowledge-base.js');

KnowledgeBase.provide('IKnowledgeBase', function (done) {
  done({
    'list'     : this.list,
    'retrieve' : this.retrieve
  });
});

KnowledgeBase.install(function (done) {
  this.animals = ['abelha', 'animal robo', 'aranha viuva negra', 'aranha', 'atum', 'baleia', 'beija-flor', 'besouro',
    'boi', 'borboleta', 'braquiossauro', 'cabra', 'cachorro', 'camarao', 'canarinho', 'canguru', 'capivara', 'caramujo',
    'cavalo', 'coala', 'cobra', 'diabo-da-tasmania', 'dodo', 'equidna', 'escorpiao', 'esquilo', 'estegossauro', 'foca',
    'formiga', 'furao', 'gaivota', 'galo', 'gato', 'gaviao', 'girafa', 'golfinho', 'humano', 'jacare', 'lacraia',
    'leao', 'lesma', 'libelula', 'lobo', 'louva-deus', 'macaco', 'mastodonte', 'mergulhao', 'mico-leao-dourado',
    'minhoca', 'morcego', 'morsa', 'mosca', 'mosquito', 'ornitorrinco', 'ovelha', 'paquicefalossauro', 'pato',
    'percevejo', 'pikachu', 'pinguim', 'piranha', 'planaria', 'poliqueta', 'pomba', 'porco', 'pterodactil', 'raposa',
    'rato', 'regaleco', 'rinoceronte', 'salamandra', 'sapo', 'tamandua', 'tartaruga', 'tatu', 'tigre-da-tasmania',
    'tigre', 'tiranossauro', 'trilobita', 'tubarao', 'urso', 'zebra', 'zumbi'];

  this.questions = {};

  async.each(this.animals, function (animal, next) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        this.questions[animal] = {};
        xhr.responseText.split('\n').map(function (question) {
          return question.split(',');
        }.bind(this)).filter(function (data) {
          return data.length === 2;
        }.bind(this)).forEach(function (question) {
          this.questions[animal][question[0].replace(/\"/g, '')] =  question[1].lastIndexOf('sim') > -1;
        }.bind(this));
        next();
      }
    }.bind(this);
    xhr.open('GET', './bd/' + animal + '.txt', true);
    xhr.send();
  }.bind(this), done);
});

KnowledgeBase.install(function (done) {
  this.list = function () {
    return this.animals;
  }.bind(this);

  this.retrieve = function (animal) {
    return this.questions[animal];
  }.bind(this);

  done();
});
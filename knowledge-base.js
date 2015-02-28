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
	this.ask = function () {}.bind(this);
	
	done();
});

KnowledgeBase.install(function (done) {
	this.retrieve = function () {}.bind(this);
	
	done();
});
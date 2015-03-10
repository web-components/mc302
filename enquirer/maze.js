'use strict';

var Enquirer;
Enquirer = new Component('./enquirer/maze.js');

Enquirer.extend('./enquirer/interface.js');

Enquirer.install(function (done) {
	
  this.discover = function () {
      var answer = this.responder.ask("here");
      this.element.innerHTML += "<p>Answer: " +  answer + "</p>";
      answer = this.responder.ask("south");
      this.element.innerHTML += "<p>Answer south: " +  answer + "</p>";
      this.responder.move("south");
      this.element.innerHTML += "<p>Moved south</p>";
      answer = this.responder.ask("east");
      this.element.innerHTML += "<p>Answer east: " +  answer + "</p>";
      answer = this.responder.ask("west");
      this.element.innerHTML += "<p>Answer west: " +  answer + "</p>";
	  return [0, 0];
  }.bind(this);
  done();
});

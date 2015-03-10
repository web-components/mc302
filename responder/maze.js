'use strict';

var Responder;
Responder = new Component('./responder/maze.js');

Responder.extend('./responder/interface.js');

Responder.install(function (done) {
  var answer, maze, currentX, currentY;

  this.ask = function (direction) {
    var x, y;
    x = currentX;
    y = currentY;

    this.AskEvent(x + '_' + y + '_' + direction);

    switch (direction) {
      case 'north' : x -= 1; break;
      case 'south' : x += 1; break;
      case 'east' : y += 1; break;
      case 'west' : y -= 1; break;
      case 'position': return [currentX, currentY];
      default: return maze[currentX][currentY] === 's';
    }

    if (maze && maze[x] && maze[x][y] && maze[x][y] === ' ') {
      currentX = x;
      currentY = y;
      return true;
    } else {
      return false;
    }
  }.bind(this);

  this.setFinalAnswer = function (val) {
    var x, y;
    answer = val;
    maze = this.knowledgeBase.retrieve(answer);

    for (x = 0; x < maze.length; x++) {
      for (y = 0; y < maze.length; y++) {
        if (maze[x][y] === 'e') {
          currentX = x;
          currentY = y;
        }
      }
    }
  }.bind(this);

  done();
});

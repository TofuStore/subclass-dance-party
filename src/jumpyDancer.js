var makeJumpyDancer = function(top, left, timeBetweenSteps) {
  var node = $('<img class="jumper" src="/spiderman1.png" style="width:60px; height:80px"/>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);
};

makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
makeJumpyDancer.prototype.constructor = makeJumpyDancer;

makeJumpyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  this.$node.animate({top: '+=50'});
  this.$node.animate({top: '-=50'});
};

makeJumpyDancer.prototype.lineUp = function() {
  this.$node.animate({top: '30'});
};
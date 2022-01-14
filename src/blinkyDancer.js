var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function() {
  this.$node.animate({top: '30'});
};

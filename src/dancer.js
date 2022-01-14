// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, node) {
  this.$node = node || $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  this.$node.animate({top: '30'});
};
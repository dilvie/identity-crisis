function rollDie () {
  // Randomly generated UUIDs have 122 random bits
  return Math.ceil(Math.random() * Math.pow(2, 122));
}

function rollTest() {
  var log = {},
    rolls = 0,
    roll,
    collision = false;

  while (collision === false) {
    roll = rollDie();
    if (!log[roll]) {
      log[roll] = true;
    } else {
      collision = true;
    }
    rolls++;
  }
  return rolls;
}

// Time the collision.
var d1 = new Date();
var times = rollTest();
var d2 = new Date();

console.log('Collision detected after ' + (d2 - d1).toString() + 'ms, ' + times + ' ids.');

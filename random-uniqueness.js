function rollDie () {
  // Randomly generated UUIDs have 122 random bits
  return Math.ceil(Math.random() * Math.pow(2, 122));
}

function rollTest() {
  var log = {},
    rolls = 0,
    roll,
    collision = false,
    start = new Date(),
    finish,
    limit = 100000000;

  while (collision === false) {
    roll = rollDie();
    if (!log[roll]) {
      log[roll] = true;
    } else {
      collision = true;
    }
    rolls++;
  }
  finish = new Date();
  console.log('Collision detected after ' + (finish - start).toString() + 'ms, ' + rolls + ' ids.');
  return rolls;
}

rollTest();


/**
 * Demonstrating the weakness of relying on random data as a
 * uniqueness guarantee. Nice in theory, but unreliable in practice.
 **/

/* "...after generating 1 billion UUIDs every second for the next 100 
 * years, the probability of creating just one duplicate would be 
 * about 50%" */
// ...
/* "However, these probabilities only hold when the UUIDs are 
  * generated using sufficient entropy." */

// http://en.wikipedia.org/wiki/Universally_unique_identifier


function rollDie () {
  // Randomly generated UUIDs have 122 random bits
  return Math.ceil(Math.random() * Math.pow(2, 122));
}

function rollTest(silent) {
  var log = {},
    rolls = 0,
    roll,
    collision = false,
    start = new Date(),
    finish,
    results,
    limit = 1000000;

  while (collision === false && rolls < limit) {
    roll = rollDie();
    if (!log[roll]) {
      log[roll] = true;
    } else {
      collision = true;
    }
    rolls++;
  }

  finish = new Date();
  results = {
    time: (finish - start).toString() + 'ms',
    rolls: rolls
  };

  if (silent === 'silent') {
    return results;
  } else if (collision) {
    // Theoretically so rare as to be practically impossible...
    // But it happens all the time in V8.
    console.log('Collision detected after ' +
      results.time + ', ' + rolls + ' ids.');
    return results;
  } else {
    console.log('Limit reach. No collisions detected.');
    return 'Limit reached';
  }
}

rollTest();

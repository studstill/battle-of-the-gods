let prompt = require('prompt');

// Classes
class SuperBeing {
  constructor(name, strength) {
    this.type = 'Super Being';
    this.name = name;
    this.strength = strength;
  }
  // Default arguments
  say(msg = 'I am a Super Being!') {
    console.log(msg);
  }
};

// Class with inheritance
class Villain extends SuperBeing {
  get villainKick() { //calculated attribute getter
    return this.strength * 10;
  }
};

// Class with inheritance
class Hero extends SuperBeing {
  get heroPunchStrength() { //calculated attribute getter
    return this.strength * 10;
  }
};

// Promises
let getName = new Promise((resolve, reject) => {
  console.log('What is your name?');
  prompt.start();

  // Prompt usage examples borrowed from:
  // https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input
  let heroName = [
    {
      name: 'name',
      validator: /^[a-zA-Z\^s\-]+$/,
      warning: 'name must be only letters, spaces, or dashes'
    }
  ];

  prompt.get(heroName, (err, result) => {
    if (err) reject(err);
    else if (result.name)
    resolve(result.name);
    else
    console.log("You were defeated because you don't have a name. \nGAME OVER");
  });
});

getName.then((result) => {
  let randomWeapon = () => {
    let weapons = ['laser sword', 'lightning bolt', 'rock'];
    let randomIndex = Math.floor((Math.random() * weapons.length) + 1);
    return weapons[randomIndex];
  }
  let user = new Hero(result, randomWeapon());
  // Template strings
  user.say(`Hello ${result}`);
  // Overriding default arguments
  user.say(`Your weapon is a mighty ${randomWeapon()}!`);

  let apexCrush = new Villain('Apex Crush', 7);

  setTimeout(() => {
    console.log('Suddenly, your nemesis appears! He shouts:');
  }, 2000);

  setTimeout(() => {
    apexCrush.say(`I am the Super Villain ${apexCrush.name}!`);
  }, 3000);

  setTimeout(() => {
    console.log('You immediately plunge into THE battle which will ' +
      'determine the fate of universe!');
  }, 5000);

  setTimeout(() => {
    console.log('... After tireless fighting...');
  }, 8000);

  setTimeout(() => {
    let youWin = () => Math.floor(Math.random() * 2);
    if (youWin() > 0) {
      // Extra feature of your choice
      // Iterators
      let shoutVictory = ['YOU', 'WERE', 'VICTORIOUS!!!', 'Game Over'];
      for (let words of shoutVictory) console.log(words);
    } else {
      // For 2 points of extra credit implement an es6 generator.
      function* spewHate(start, stop, step) {
        while (start < stop) {
          yield start;
          start += step;
        }
      }
      let threat = ['You', 'Were', 'Defeated...', 'Game Over'];
      for (let i of spewHate(0, threat.length, 1)) {
        console.log(threat[i]);
      }
    }
  }, 11000);
});


// Never defaulting to es5 features for the above 1pt

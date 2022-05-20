class Character {
  // TODO: Add a constructor
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }


  // TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`

  printStats() {
    console.log(`${this.name} --- ${this.strength} strength --- ${this.hitPoints} hitpoints`)

  };


  // TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0

  isAlive() {
    if (this.hitPoints > 0) {
      console.log(`${this.name} is alive!`)
      return true
    }

    else {
      console.log(`${this.name} has died!`)
      return false
    }
  };


  // TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength

  attack(attackee) {
    attackee.hitPoints -= this.strength;
  };


};

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 15, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;


grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  var luckyhit = Math.random();
  var heal = Math.random();

  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
      if (heal > .4) {
        grace.hitPoints += 30;
      }
    dijkstra.printStats();
  } else if (luckyhit <= .4){
    dijkstra.attack(grace);
    dijkstra.attack(grace);
    grace.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 1000);


// let luckyhit = Math.random();
// console.log(luckyhit);
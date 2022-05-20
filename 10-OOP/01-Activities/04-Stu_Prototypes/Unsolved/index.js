// TODO: Add a comment describing what kind of function this is
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}
// This is a constructor function. It gives the respective properties to the character object being created.

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}
Profession: ${this.type}
    Age: ${this.age}
    Strength: ${this.strength}
    HitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};
// This will allow us to modify our objects created using the Character constructor function. It will now have our function print out the stats of the character.

// TODO: Add a comment describing the functionality of this method
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};
// This is an addition to the character function that will then tell us if the character is alive or dead, depending on whether the hitpoints variable has a value greater than zero.

// TODO: Add a comment describing the functionality of this method
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};
// An additon the the character function, this describes what an attack does to another character. The defending charcter's hitpoints will go down by the attacking characters strength variable value.

// TODO: Add a comment describing the functionality of this method
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};
// An addition to the character function, this modifies a characters variable values in a positive manner. Increases age by 1, strength by 5, and hitpoints by 25.

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
warrior.printStats();
// Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`

// Crusher
// Warrior 
// 25
// 10
// 55


// TODO: Add a comment describing what you expect to see printed in the console
warrior.isAlive();
// Crusher is still alive!

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
rogue.printStats();

// Dodger
// Rogue
// 24
// 25
// 75
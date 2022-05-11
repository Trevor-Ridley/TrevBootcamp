var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major");
constellations.sort();
console.log(constellations);

var planetsSliced = planets.slice(0,5);
console.log(planetsSliced);

var galaxy = constellations.concat(planets);
console.log(galaxy);

var starCaps = star.replace("polaris", "POLARIS");
console.log(starCaps);


// Random silly name generator

// cjs npm install sillyname
/*
var generateName = require("sillyname");
*/

// esm npm install sillyname
import generateName from "sillyname";

var sillyname = generateName();
console.log("Hello, " + sillyname + "!");

// Superhero name generator
import { randomSuperhero } from "superheroes";
 
const name = randomSuperhero();
 
console.log(`I am ${name}!`);
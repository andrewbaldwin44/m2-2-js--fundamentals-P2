// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies =
  'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks =
  'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];

console.log(smartGuy.length);
console.log(rickSaying.length);
console.log(grandson.length);
console.log(enemies.length);
console.log(alternateRicks.length);
console.log(secret.length);
console.log(notCode.length);

// Q1.1
// How many names does Morty have? (use grandson)
console.log(grandson.split(' ').length);
// Q1.2
// Convert the alternateRicks string to an array. Console that array.
const alternateRicksList = alternateRicks.split(', ')
console.log(alternateRicksList);
// Q1.3
// How many Ricks have been named in alternateRicks?
console.log(alternateRicksList.length);
// Q1.4
// How many characters are there in rickSaying (without spaces)?
console.log(rickSaying.replace(' ', '').split('').length);
// Q1.4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".
console.log(grandson.replace(' Antoine', ''));
// Q1.5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.
let decoded = secret;
notCode.forEach(code => decoded = decoded.replace(code, ''));
console.log(decoded);

// Q1.6 (Stretch Goal)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
let trueEnemies = enemies.replace('Scary Terry, ', '');
console.log(trueEnemies);

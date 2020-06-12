// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q9
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(lst) {
  return lst.filter(name => {if (name.length >= 4) return `Hello ${name}`});
}
// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));

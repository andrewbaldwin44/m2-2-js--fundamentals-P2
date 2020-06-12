// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

function isArmstrong(number) {
  let digit_sum =
    [...number].reduce((sum, digit) => {
        return sum += Math.pow(Number(digit), number.length);
    }, 0);

  return digit_sum == number;
}

for (let number = 0; number <= 999; number++) {
  if (isArmstrong(number.toString())) armstrongNumbers.push(number);
}

console.log(armstrongNumbers);

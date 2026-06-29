// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  if (numerator < denominator) {
    return true;
  }
  return false;
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const case1 = isProperFraction(1, 2);
assertEquals(case1, true);
console.log(isProperFraction(1, 2));

const case2 = isProperFraction(3, 4);
assertEquals(case2, true);
console.log(isProperFraction(3, 4));

const case3 = isProperFraction(4, 4);
assertEquals(case3, false);
console.log(isProperFraction(4, 4));

const case4 = isProperFraction(8, 5);
assertEquals(case4, false);
console.log(isProperFraction(8, 5));

const case5 = isProperFraction(16, 22);
assertEquals(case5, true);
console.log(isProperFraction(16, 22));

const case6 = isProperFraction(0, 6);
assertEquals(case6, true);
console.log(isProperFraction(0, 6));

const case7 = isProperFraction(5, 0);
assertEquals(case7, false);
console.log(isProperFraction(5, 0));

module.exports = isProperFraction;

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.


// Here's our helper again
// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
// assertEquals(isProperFraction(1, 2), true);
// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getAngleType(angle) {
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  else if (angle == 90) {
    return "Right angle";
  }
  else if (angle == 180) {
    return "Straight angle";
  }
  else if (angle > 0 && angle < 90) {
    return "Acute angle";
  }
  else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  }
  else 
    return "Reflex angle";
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
const invalid = getAngleType(0);
assertEquals(invalid, "Invalid angle");
console.log (getAngleType(0));

const invalid0 = getAngleType(-10);
assertEquals(invalid, "Invalid angle");
console.log (getAngleType(-10));

const invalid1 = getAngleType(360);
assertEquals(invalid1, "Invalid angle");
console.log (getAngleType(360));

const invalid2 = getAngleType(900);
assertEquals(invalid2, "Invalid angle");
console.log (getAngleType(900));

const right = getAngleType(90);
assertEquals(right, "Right angle");
console.log (getAngleType(90));

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
console.log (getAngleType(180));

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
console.log (getAngleType(45));

const obtuse = getAngleType(135);
assertEquals(obtuse, "Obtuse angle");
console.log (getAngleType(135));

const reflex = getAngleType(240);
assertEquals(reflex, "Reflex angle");
console.log (getAngleType(240));

module.exports = getAngleType;

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
//module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
// function assertEquals(actualOutput, targetOutput) {
  //console.assert(
    //actualOutput === targetOutput,
    //`Expected ${actualOutput} to equal ${targetOutput}`
  //);
//}

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles
//const right = getAngleType(90);
//assertEquals(right, "Right angle");
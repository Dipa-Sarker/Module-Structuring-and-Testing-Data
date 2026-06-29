// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);

  const validRank = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const validSuit = ["♠","♥","♦","♣"];

 if (!validRank.includes(rank) || !validSuit.includes(suit)) {
  throw new Error("Invalid Card");
  }

  if (rank === "A") {
    return 11;
  }
  else if (rank === "J" || rank=== "Q" || rank === "K") {
    return 10;
  }

 else if (rank >= 2 && rank <= 10) {
  return Number(rank);
  } 
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

const ace = getCardValue("A♠");
assertEquals(getCardValue("A♠"), 11);
console.log (getCardValue("A♠"));

const faceJ = getCardValue("J♣");
assertEquals(getCardValue("J♣"), 10);
console.log (getCardValue("J♣"));

const faceQ = getCardValue("Q♦");
assertEquals(getCardValue("Q♦"), 10);
console.log (getCardValue("Q♦"));

const faceK = getCardValue("K♦");
assertEquals(getCardValue("K♦"), 10);
console.log (getCardValue("K♦"));

const number5 = getCardValue("5♥");
assertEquals(getCardValue("5♥"), 5);
console.log (getCardValue("5♥"));

const number10 = getCardValue("10♥");
assertEquals(getCardValue("10♥"), 10);
console.log (getCardValue("10♥"));

try {
  getCardValue("10");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
 console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("A");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
 console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("10x");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
 console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("JK");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
 console.log("Error thrown for invalid card 🎉");
}

try {
  getCardValue("Qxx");
  console.error("Error was not thrown for invalid card 😢");
} catch (e) {
 console.log("Error thrown for invalid card 🎉");
}

module.exports = getCardValue;
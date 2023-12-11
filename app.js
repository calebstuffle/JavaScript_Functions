console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function printOdds(count) {
//   if (count > 0) {
//     for (let i = 1; i <= count; i++) {
//       if (i % 2 != 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     for (let i = -1; i >= count; i--) {
//       if (i % 2 != 0) {
//         console.log(i);
//       }
//     }
//   }
// }

// printOdds(10);
// printOdds(-20);

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// function checkAge(userName, age) {
//   let aboveSixteen = `Congrats ${userName}, you can drive!`;
//   let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
//   if (age < 16) {
//     console.log(belowSixteen);
//   } else {
//     console.log(aboveSixteen);
//   }
// }
// checkAge("Fred", 15);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// function quadLocation(x, y) {
//   if (x > 0 && y > 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 1`);
//   } else if (x == 0 && y != 0) {
//     console.log(`(${x}, ${y}) is on the y axis`);
//   } else if (x < 0 && y > 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 2`);
//   } else if (x != 0 && y == 0) {
//     console.log(`(${x}, ${y}) is on the x axis`);
//   } else if (x < 0 && y < 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 3`);
//   } else if (x > 0 && y < 0) {
//     console.log(`(${x}, ${y}) is in Quadrant 4`);
//   } else {
//     console.log(`(${x}, ${y}) is on the origin`);
//   }
// }

// quadLocation(1, -1);

// Exercise 4 Section
// console.log("EXERCISE 4:\n==========\n");
// function typeOfTriangle(side1, side2, side3) {
//   if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//     if (side1 == side2 && side1 == side3) {
//       return "equalateral";
//     } else if (side1 == side2 || side1 == side3 || side2 == side3) {
//       return "iscoceles";
//     } else {
//       return "scalene";
//     }
//   } else {
//     return "invalid triangle";
//   }
// }

// typeOfTriangle(3, 4, 5); // scalene

// OR

// function validTriangle(side1, side2, side3) {
//   return (
//     side1 + side2 > side3 && side1 + side2 > side3 && side2 + side3 > side1
//   );
// }

// function typeofTriangle(side1, side2, side3) {
//   let valid = validTriangle(side1, side2, side3);
//   if (valid) {
//     if (side1 == side2 && side1 == side3) {
//       return "equaliteral";
//     } else if (side1 == side2 || side1 == side3 || side2 == side3) {
//       return "iscoceles";
//     } else {
//       return "scalene";
//     }
//   } else {
//     return "invalid triangle";
//   }
// }

// console.log(`2, 3, 4 – ${typeofTriangle(2, 3, 4)}`); // scalene
// console.log(`1, 1, 2 – ${typeofTriangle(1, 1, 2)}`); // invalid
// console.log(`2, 2, 1 – ${typeofTriangle(2, 2, 1)}`); // isoceles
// console.log(`1, 1, 1 – ${typeofTriangle(1, 1, 1)}`); // equilateral

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function averageData(planLimit, day, usage) {
  let periodLength = 30;
  let aboveBeneath;
  let remainingDays = periodLength - day;
  let projData = planLimit / periodLength;
  let avgUsage = usage / day;
  let finalUsage = (usage / day) * periodLength;
  let backOnTrack = (planLimit - usage) / (periodLength - day);
  let finalAboveBeneath = Math.abs(finalUsage - planLimit);

  if (avgUsage > projData) {
    aboveBeneath = "ABOVE";
  } else if ((avgUsage = projData)) {
    aboveBeneath = "ON TRACK";
  } else {
    aboveBeneath = "BENEATH";
  }

  console.log(`${day} days used, ${remainingDays} days remaining
  Average daily use: ${avgUsage.toFixed(2)} GB/day
  You are ${aboveBeneath} your average daily use ${projData.toFixed(2)} GB/day, 
  continuing this high usage, you'll be ${aboveBeneath} your data plan by ${finalAboveBeneath.toFixed(
    2
  )} 
  GB. 
  To stay below your data plan, use no more than ${backOnTrack.toFixed(
    2
  )} GB/day.`);
}
averageData(100, 18, 76);

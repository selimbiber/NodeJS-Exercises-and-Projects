// https://academy.patika.dev/tr/courses/nodejs/odev1

function calculateCircle(radius) {
  if (radius <= 0) return 0;
  return Math.PI * Math.pow(radius, 2);
}

if (process.argv.length < 3) {
  console.log("No radius value entered.");
  process.exit(1);
}

const radius = parseInt(process.argv[2]);

if (isNaN(radius)) {
  console.log("No valid value entered.");
  process.exit(1);
}

const area = calculateCircle(radius);
console.log(`The area of a circle with radius ${radius} is ${area}.`);

// node index.js 5 -> The area of a circle with radius 5 is 78.53981633974483.

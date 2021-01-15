const person = {
  name: "Lashon",
  age: 30,
  race: "Black",
  weight: 400,
};

for (let key in person) {
  console.log(person[key]);
}

function max(num1, num2) {
  let greater = "is greater than";
  if (num1 > num2) {
    console.log(`${num1} ${greater} ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} ${greater} ${num1}`);
  } else {
    console.log("They are even");
  }
}

max(200, 2000);

function min(num1, num2) {
  let mini = num1 < num2 ? num1 : num2;
  let maxi = num1 > num2 ? num1 : num2;
  let smaller = "is smaller than";
  console.log(`${mini} ${smaller} ${maxi}`);
}
min(200, 2000);

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(300, 400));

function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (typeof input !== "number") {
    return "Not a number";
  } else {
    return input;
  }
}

console.log(fizzBuzz(15));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) {
    return "ok";
  }
  let points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    return `You license is suspended`;
  }
  return `You have ${points} on your licencse now`;
}

console.log(checkSpeed(100));

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
showNumber(10);

let falsy = [0, 1, 2, 3, "", null, undefined, "John"];

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(falsy));

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 45,
  director: "b",
};

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}
showProperties(movie);

function sum(limit) {
  let total = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return total;
}

console.log(sum(10));

const marks = [100, 80, 80];

function calculateAverage(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total / array.length;
}

function calculateGrade(array) {
  const avg = calculateAverage(array);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  else return "A";
}

console.log(calculateGrade(marks));

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "$";
    console.log(pattern);
  }
}
showStars(10);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showPrime(100);

// Auguments
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

// console.log(sum(0.1, 10, 20, 30, 40));

// Default Parameters
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// console.log(interest(10000));

const person = {
  fName: "Lashon",
  lName: "Hudson",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

person.fullName = "Whitley Brooks";
// console.log(person);

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
circle.radius = 2;

console.log(circle.area);

function add(...numbers) {
  if (numbers.length === 1 && Array.isArray(numbers[0]))
    numbers = [...numbers[0]];

  return numbers.reduce((a, b) => a + b);
}
// console.log(add([1, 2, 3, 4, 5, 6, 70]));

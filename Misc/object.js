// Factory function
function creatCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = creatCircle(1);
const circle2 = creatCircle(5);
console.log(circle1, circle2);

// Constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`This is my message I'm`);
  };
}

const address = {
  street: `511 McIntyre street`,
  city: `Savannah`,
  zipCode: 31415,
};

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}
showAddress(address);

function createAdress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
const lashon = createAdress(`511 Mcintyre street`, `Savannah`, 31415);
console.log(lashon);

function Adress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let shon1 = new Adress("511 Mcintyre", "Savannah", 31415);
let shon2 = new Adress("511 Mcintyre", "Savannah", 31415);
let shon3 = shon1;

function areEqual(shon1, shon2) {
  return (
    shon1.street === shon2.street &&
    shon1.city === shon2.city &&
    shon1.zipcode === shon2.zipcode
  );
}

console.log(areEqual(shon1, shon2));
console.log(areEqual(shon1, shon3));

function areSame(shon1, shon2) {
  return shon1 === shon2;
}

// Adress 3 is the same and equal because it references the same obj in memory
console.log(areSame(shon1, shon2));
console.log(areSame(shon1, shon3));

let blogPost = {
  titel: "Lashons update",
  auther: "Lashon",
  views: 255,
  comments: [
    {
      author: "Whit",
      body: "This is so cool shon",
    },
    {
      author: "Neal",
      body: "Wow",
    },
  ],
  isLive: true,
};

function Post(title, body, author) {
  this.title = title;
  this.author = author;
  this.body = body;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const whit = new Post("a", "b", 'c');
console.log(whit);

let priceRange = [
{label:'$', tooltip:'Inexpensive', minPrice:0, maxPrice:10},
{label:'$$', tooltip:'Moderate', minPrice:11, maxPrice:20},
{label:'$$$', tooltip:'Expensive', minPrice:21, maxPrice:50}
]
let restaurants = [
    {
        averagePerPerson: 5
    }
]
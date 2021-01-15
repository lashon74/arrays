const numbers = arrayFromRange(-10, -4);

function arrayFromRange(min, max) {
  const output = [];

  for (let i = min; i <= max; i++) output.push(i);

  return output;
}

let numbers2 = [1, 2, 3, 4, 5, 0,1,1,1,56];

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

function except(array, excluded) {
  const output = [];

  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

// console.log(except(numbers2, [1,0,56]));
// console.log(includes(numbers, 56));
// console.log(numbers);

const numbers = arrayFromRange(-10, -4);

function arrayFromRange(min, max1) {
  const output1 = [];

  for (let i = min; i <= max1; i++) output1.push(i);

  return output1;
}

let numbers2 = [1, 2, 3, 4, 5, 0, 1, 1, 1, 56];

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

function except(array, excluded) {
  const output1 = [];

  for (let element of array) {
    if (!excluded.includes(element)) {
      output1.push(element);
    }
  }
  return output1;
}

const numbers3 = [1, 2, 3, 4, 1];

const output = move(numbers3, 1, 2);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const output2 = [...array];
  const element = output2.splice(index, 1)[0];
  output2.splice(position, 0, element);
  return output2;
}

try {
  const numbers4 = [1, 2, 3, 4, 1];
  const count = countOccurrences(numbers4, 1);
  // console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array.");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

const max = getMax([1, 2, 3, 4, 5, 99]);
// console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  return array.reduce((a, b) => (a > b ? a : b));
}

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

// console.log(output);
// console.log(except(numbers2, [1,0,56]));
// console.log(includes(numbers, 56));
// console.log(numbers);

console.log(titles);

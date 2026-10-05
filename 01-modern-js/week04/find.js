// MDN
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);
console.log(found);

// 学習
const numbers = [10, 20, 30, 40, 50];

const findNumber = numbers.find((number) => number >= 30);
const findNumber2 = numbers.filter((number) => number >= 30);
console.log(findNumber);
console.log(findNumber2);

const products = [
  { id: 1, name: 'Keyboard', price: 300 },
  { id: 2, name: 'Mouse', price: 150 },
  { id: 3, name: 'Monitor', price: 500 },
  { id: 4, name: 'Headphones', price: 200 },
];

const findProducts = products.find((product) => product.id === 3);
console.log(findProducts);

// 演習1：数値配列
const scores = [65, 72, 88, 91, 76];

const findScores = scores.find((score) => score >= 80);
console.log(findScores);

// 演習2：Object配列
const users = [
  { id: 1, name: 'Sato', age: 24 },
  { id: 2, name: 'Tanaka', age: 32 },
  { id: 3, name: 'Suzuki', age: 28 },
  { id: 4, name: 'Yamada', age: 35 },
];

const findUsers = users.find((user) => user.id === 3);
console.log(findUsers);

// 演習3：見つからない場合
const findUsers2 = users.find((user) => user.id === 10);
console.log(findUsers2);

// 演習4：filterとの比較
const findUsers3 = users.find((user) => user.age >= 25);
const filterUsers = users.filter((user) => user.age >= 25);
console.log(findUsers3);
console.log(filterUsers);


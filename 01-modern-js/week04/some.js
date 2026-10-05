// MDN
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));

// 学習
const numbers = [10, 20, 30, 40, 50];

const isBiggerThan30 = (number) => number >= 30;
console.log(numbers.some(isBiggerThan30));

const isBiggerThan100 = (number) => number >= 100;
console.log(numbers.some(isBiggerThan100));

const products = [
  { id: 1, name: 'Keyboard', price: 300 },
  { id: 2, name: 'Mouse', price: 150 },
  { id: 3, name: 'Monitor', price: 500 },
  { id: 4, name: 'Headphones', price: 200 },
];

const isBiggerThan400 = (product) => product.price >= 400;
console.log(products.some(isBiggerThan400));

// 演習1：数値配列
const scores = [65, 72, 88, 91, 76];
const isBiggerThan90 = (score) => score >=90;
console.log(scores.some(isBiggerThan90));

// 演習2：Object配列
const users = [
  { id: 1, name: 'Sato', age: 24 },
  { id: 2, name: 'Tanaka', age: 32 },
  { id: 3, name: 'Suzuki', age: 28 },
  { id: 4, name: 'Yamada', age: 35 },
];
const isBiggerThanOld30 = (user) => user.age >= 30;
console.log(users.some(isBiggerThanOld30));

// 演習3：falseになるケース
const isBiggerThanOld40 = (user) => user.age >= 40;
console.log(users.some(isBiggerThanOld40));

// 演習4：find()との比較
const isFind30 = users.find((user) => user.age >= 30);
console.log(users.some(isBiggerThanOld30));
console.log(isFind30);

// 演習5：少し実務寄り
const tasks = [
  { id: 1, title: 'Coding', completed: true },
  { id: 2, title: 'Design', completed: true },
  { id: 3, title: 'Review', completed: false },
];
const incompleteTask = (task) => task.completed === false;
console.log(tasks.some(incompleteTask));



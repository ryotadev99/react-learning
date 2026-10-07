// MDN
const array = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
);

console.log(sumWithInitial);

// 学習
const numbers = [10, 20, 30, 40];

const sumNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sumNumbers);

// 演習1：基本の合計
const scores = [70, 80, 65, 90];

const sumScores = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sumScores);

// 演習2：金額の合計
const prices = [1200, 800, 1500, 500];

const sumPrices = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
console.log(sumPrices);

// 演習3：Object配列
const products = [
  { id: 1, name: 'Keyboard', price: 300 },
  { id: 2, name: 'Mouse', price: 150 },
  { id: 3, name: 'Monitor', price: 500 },
  { id: 4, name: 'Headphones', price: 200 },
];

const sumProductsPrices = products.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price, 
  initialValue,
);
console.log(sumProductsPrices);

// 演習4：accumulatorを追跡
const numbers2 = [5, 10, 15];
// 1回目
// accumulator = 0
// currentValue = 5
// return = 5

// 2回目
// accumulator = 5
// currentValue = 10
// return = 15

// 3回目
// accumulator = 15
// currentValue = 15
// return = 30

// 最終結果 = 30

const sumNumbers2 = numbers2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sumNumbers2);

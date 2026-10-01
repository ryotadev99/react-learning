// NDM
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

const numbers = [10, 20, 30, 40, 50];

const result = numbers.filter((number) => number >= 30);
console.log(result);

// 演習１
const prices = [500, 1200, 800, 2500, 300];

const overThousand = prices.filter((price) => price >= 1000);
console.log(overThousand);

// 演習2
const products = [
  { name: 'クロワッサン', price: 240 },
  { name: '食パン', price: 450 },
  { name: 'ケーキ', price: 1200 },
  { name: 'サンドイッチ', price: 680 }
];

const expensiveProducts = products.filter((product) => product.price >= 500);
console.log(expensiveProducts);

// 演習3
const cheapProducts = products.filter((product) => product.price < 500);
console.log(cheapProducts);

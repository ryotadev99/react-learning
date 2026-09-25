// Udemy
// let colors = ['Red', 'Green', 'Blue'];
// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach(function(color) {
//   console.log(color);
// });

// const colors = ['Red', 'Green', 'Blue'];
// for(const color of colors) {
//   console.log(color);
// }

// const str = 'JavaScript';
// for(const value of str) {
//   console.log(value);
// }

// let scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for(let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }

// let average = sum / scores.length;

// console.log('合計値：' + sum);
// console.log('平均値：' + average);

// let products = [
//   {
//     name: 'クロワッサン',
//     price: 250
//   },
//   {
//     name: '食パン',
//     price: 300
//   },
//   {
//     name: 'メロンパン',
//     price: 180
//   }
// ];
// for(let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }
// products.forEach(function(product) {
//   console.log(product.name);
// });
// for(const product of products) {
//   console.log(product.name);
// }

let arr = [
  {
    name: 'HTML',
    score: 80
  },
  {
    name: 'CSS',
    score: 90
  },
  {
    name: 'JavaScript',
    score: 70
  }
];

// 演習A
arr.forEach(function(arr1) {
  console.log(arr1.name);
});

// 演習B
arr.forEach(function(arr2) {
  console.log(`${arr2.name}:${arr2.score}点`);
});

// 演習C + 余裕があれば問題
for(const arrType of arr) {
  console.log(`${arrType.name}:${arrType.score}点`);
  // console.log(arrType.score);
  if(arrType.score >= 80) {
    console.log(arrType.name);
  }
};


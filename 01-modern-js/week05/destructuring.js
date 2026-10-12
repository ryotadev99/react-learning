// 学習
// const colors = ['red', 'blue', 'green'];
// const [firstColor, secondColor] = colors;

// console.log(firstColor);
// console.log(secondColor);

// const user = {
//   id: 1,
//   name: 'Tanaka',
//   age: 30,
// };

// const {name, age} = user;
// console.log(name);
// console.log(age);

// const product = {
//   id: 10,
//   name: 'Keyboard',
// };

// const { name: productName } = user;
// console.log(productName);

// const user2 = {
//   name1: 'Suzuki',
// };

// const { name1, age1 = 20 } = user2;
// console.log(name1);
// console.log(age1);

// 演習1：配列の分割代入
const fruits = ['Apple', 'Banana', 'Orange'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// 演習2：オブジェクトの分割代入
const product = {
  id: 10,
  name: 'Keyboard',
  price: 3000,
  stock: 5,
};
const { name: productName, price, stock } = product;
console.log(productName);
console.log(price);
console.log(stock);

// 演習3：実務を想定した演習
const member = {
  id: 1,
  name: 'Suzuki',
  email: 'suzuki@example.com',
  role: 'admin',
};
const { name: memberName, email: memberEmail } = member;
console.log(`${memberName}さんのメールアドレスは${memberEmail}です`);

// // Q1. 分割代入とは、何をするための構文ですか？
// 配列から値を取り出し、別の変数に代入することができる構文

// // Q2. 配列の分割代入とオブジェクトの分割代入では、取得する値がどのように決まりますか？
// 分割代入はそのままの配列の順番で取得、オブジェクトの分割代入は指定したプロパティの値を取得

// // Q3. 以下のコードでは、firstとsecondにそれぞれ何が入りますか？
// const numbers = [10, 20, 30];

// const [first, second] = numbers;
// first: 10
// second: 20

// // Q4. 次のコードは正しく動作しますか？理由も説明してください。
// const user = {
//   name: 'Sato',
//   age: 25,
// };

// const { age, name } = user;
// 動作する。オブジェクトの分割代入はプロパティ名を指定したらその値を取得しているので

// // Q5. 次のコードのageには何が入りますか？
// 20